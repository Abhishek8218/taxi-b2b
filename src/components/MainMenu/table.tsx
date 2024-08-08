"use client";

import React, { useState, useEffect } from "react";
import Input from "../ui/Input";

type Payment = {
  id: string;
  amount: number;
  status: string;
  email: string;
  date: string;
};

const initialData: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "Success",
    email: "ken99@yahoo.com",
    date: "2024-08-01",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "Success",
    email: "Abe45@gmail.com",
    date: "2024-08-02",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "Processing",
    email: "Monserrat44@gmail.com",
    date: "2024-08-03",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "Failed",
    email: "Silas22@gmail.com",
    date: "2024-08-04",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "Pending",
    email: "carmella@hotmail.com",
    date: "2024-08-05",
  },
];

const Table = () => {
  const [data, setData] = useState<Payment[]>(initialData);
  const [filters, setFilters] = useState({
    id: "",
    email: "",
    amount: "",
    status: "",
    date: "",
  });

  const [debouncedFilters, setDebouncedFilters] = useState(filters);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilters(filters);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [filters]);

  const filteredData = data.filter((item) => {
    const amountMatch =
      debouncedFilters.amount === "" ||
      item.amount.toString().includes(debouncedFilters.amount);

    return (
      item.id.toLowerCase().includes(debouncedFilters.id.toLowerCase()) &&
      item.email.toLowerCase().includes(debouncedFilters.email.toLowerCase()) &&
      amountMatch &&
      item.status.toLowerCase().includes(debouncedFilters.status.toLowerCase()) &&
      item.date.includes(debouncedFilters.date)
    );
  });

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <div className="min-w-full shadow rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-4">
            {/* <input
              type="text"
              name="id"
              placeholder="Filter by ID"
              value={filters.id}
              onChange={handleFilterChange}
              className="p-2 border rounded"
            /> */}
            <Input  type="text"
              name="id"
              placeholder="Filter by ID"
              value={filters.id}
              onChange={handleFilterChange}
              className="p-2 border rounded"/>
        

<Input type="text"
              name="email"
              placeholder="Filter by email"
              value={filters.email}
              onChange={handleFilterChange}
              className="p-2 border rounded"/>

            <Input  type="text"
              name="amount"
              placeholder="Filter by amount"
              value={filters.amount}
              onChange={handleFilterChange}
              className="p-2 border rounded"/>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className=" border rounded"
            >
              <option value="">Filter by status</option>
              <option value="Success">Success</option>
              <option value="Processing">Processing</option>
              <option value="Failed">Failed</option>
              <option value="Pending">Pending</option>
            </select>
            <Input   type="date"
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
              className="p-2 border rounded select-none placeholder:select-none"/>
          </div>
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full bg-gray-100 border-b">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Amount</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 px-6">{item.id}</td>
                    <td className="py-3 px-6">{item.email}</td>
                    <td className="py-3 px-6">${item.amount.toFixed(2)}</td>
                    <td className="py-3 px-6">{item.status}</td>
                    <td className="py-3 px-6">{item.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-3 px-6 text-center">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
