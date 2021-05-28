/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Benchmark } from '../types';

interface BenchmarksContext {
  benchmarks: Benchmark[];
  machines: string[];
  addBenchmark: (newBenchmark: Benchmark) => void;
  deleteBenchmark: (benchmarkId: string) => void;
  deleteMachine: (machineId: string) => void;
  addMachine: (machineId: string, values: number[]) => void;
  getArithmeticMedian: (forMachine: string) => number;
  getGeometricMedian: (forMachine: string, normalizedBy: string) => number;
  getWeightedArithmeticMedian: (forMachine: string, weightedBy: string) => number;
}

const initialState: BenchmarksContext = {
  machines: ['Máquina A', 'Máquina B', 'Máquina C'],
  benchmarks: [
    { id: 'Benchmark 1', values: { 'Máquina A': 100, 'Máquina B': 150, 'Máquina C': 300 } },
    { id: 'Benchmark 2', values: { 'Máquina A': 200, 'Máquina B': 450, 'Máquina C': 50 } },
    { id: 'Benchmark 3', values: { 'Máquina A': 400, 'Máquina B': 50, 'Máquina C': 250 } },
    { id: 'Benchmark 4', values: { 'Máquina A': 800, 'Máquina B': 50, 'Máquina C': 250 } },
  ],
  addBenchmark: (newBenchmark: Benchmark) => {},
  deleteBenchmark: (benchmarkId: string) => {},
  addMachine: (machineId: string, values: number[]) => {},
  deleteMachine: (machineId: string) => {},
  getArithmeticMedian: (forMachine: string) => 0,
  getGeometricMedian: (forMachine: string) => 0,
  getWeightedArithmeticMedian: (forMachine: string, weightedBy: string) => 0,
};

const BenchmarksContext = createContext(initialState);

export const BenchmarksProvider = ({ children }: { children: ReactNode }) => {
  const [benchmarks, setBenchmarks] = useState<Benchmark[]>(initialState.benchmarks);
  const [machines, setMachines] = useState<string[]>(initialState.machines);

  const addBenchmark = (newBenchmark: Benchmark) =>
    setBenchmarks(benchs => [...benchs, newBenchmark]);

  const deleteBenchmark = (benchmarkId: string) =>
    setBenchmarks(benchs => [...benchs.filter(b => b.id !== benchmarkId)]);

  const addMachine = (machineId: string, values: number[]) => {
    setMachines(machines => [...machines, machineId]);
    setBenchmarks(benchmarks =>
      benchmarks.map((benchmark, index) => ({
        id: benchmark.id,
        values: { ...benchmark.values, [machineId]: values[index] },
      }))
    );
  };

  const deleteMachine = (machineId: string) => {
    setMachines(machines => machines.filter(machine => machine !== machineId));
    setBenchmarks(benchmarks =>
      benchmarks.map(benchmark => {
        const { [machineId]: _, ...filteredValues } = benchmark.values;
        return { id: benchmark.id, values: filteredValues };
      })
    );
  };

  const normalizeBenchmark = (benchmarkId: string, machineId: string) => {
    const values = { ...benchmarks.find(b => b.id === benchmarkId)?.values };
    const normalized = { id: benchmarkId, values };
    let relation = 1;
    Object.keys(values)
      .filter(key => key !== machineId)
      .forEach(machine => {
        relation = values[machineId] / 100;
        normalized.values[machine] = normalized.values[machine] / relation;
      });
    normalized.values[machineId] = 100;
    return normalized;
  };

  const getArithmeticMedian = (forMachine: string) => {
    let value = 0;
    benchmarks.forEach(b => (value += b.values[forMachine]));
    return benchmarks.length > 0 ? value / benchmarks.length : 0;
  };

  const getGeometricMedian = (forMachine: string, normalizedBy: string) => {
    const normalizedBenchmarks: Benchmark[] = [];
    benchmarks.forEach(benchmark => {
      normalizedBenchmarks.push(normalizeBenchmark(benchmark.id, normalizedBy));
    });

    let result = 1;
    normalizedBenchmarks.forEach(b => {
      result = result * b.values[forMachine];
    });

    return Math.pow(result, 1 / benchmarks.length);
  };

  const getWeightedArithmeticMedian = (forMachine: string, weightedBy: string) => {
    let weight = 0;
    let relation = 0;
    let result = 0;
    benchmarks.forEach(b => (weight = weight + 1 / b.values[weightedBy]));

    benchmarks.forEach(b => {
      relation = (1 / weight) * (1 / b.values[weightedBy]);
      result = result + relation * b.values[forMachine];
    });

    return result;
  };

  return (
    <BenchmarksContext.Provider
      value={{
        benchmarks,
        machines,
        addBenchmark,
        deleteBenchmark,
        addMachine,
        deleteMachine,
        getArithmeticMedian,
        getGeometricMedian,
        getWeightedArithmeticMedian,
      }}
    >
      {children}
    </BenchmarksContext.Provider>
  );
};

export const useBenchmarks = () => useContext(BenchmarksContext);
