"use client";

import React, { useState, useEffect } from "react";
import Input from "../../ui/Input";

type Booking = {
  bookingId: string;
  customerName: string;
  roomType: string;
  checkInDate: string;
  checkOutDate: string;
  status: string;
  totalAmount: number;
};

const initialBookings: Booking[] = [
  {
    bookingId: "BK001",
    customerName: "John Doe",
    roomType: "Deluxe",
    checkInDate: "2024-08-10",
    checkOutDate: "2024-08-15",
    status: "Confirmed",
    totalAmount: 750,
  },
  {
    bookingId: "BK002",
    customerName: "Jane Smith",
    roomType: "Suite",
    checkInDate: "2024-08-12",
    checkOutDate: "2024-08-17",
    status: "Pending",
    totalAmount: 1200,
  },
  {
    bookingId: "BK003",
    customerName: "Alice Brown",
    roomType: "Single",
    checkInDate: "2024-08-11",
    checkOutDate: "2024-08-14",
    status: "Cancelled",
    totalAmount: 300,
  },
  {
    bookingId: "BK004",
    customerName: "Michael Johnson",
    roomType: "Double",
    checkInDate: "2024-08-18",
    checkOutDate: "2024-08-22",
    status: "Confirmed",
    totalAmount: 900,
  },
];

const BookingsTable = () => {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [filters, setFilters] = useState({
    bookingId: "",
    customerName: "",
    roomType: "",
    status: "",
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

  const filteredBookings = bookings.filter((booking) => {
    return (
      booking.bookingId
        .toLowerCase()
        .includes(debouncedFilters.bookingId.toLowerCase()) &&
      booking.customerName
        .toLowerCase()
        .includes(debouncedFilters.customerName.toLowerCase()) &&
      booking.roomType
        .toLowerCase()
        .includes(debouncedFilters.roomType.toLowerCase()) &&
      booking.status.toLowerCase().includes(debouncedFilters.status.toLowerCase())
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
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-4">
        
            <Input   type="text"
              name="bookingId"
              placeholder="Filter by Booking ID"
              value={filters.bookingId}
              onChange={handleFilterChange}
              className="p-2 border rounded" />
            <Input
              type="text"
              name="customerName"
              placeholder="Filter by Customer Name"
              value={filters.customerName}
              onChange={handleFilterChange}
              className="p-2 border rounded"
            />
            <Input
              type="text"
              name="roomType"
              placeholder="Filter by Room Type"
              value={filters.roomType}
              onChange={handleFilterChange}
              className="p-2 border rounded"
            />
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className=" border rounded"
            >
              <option value="">Filter by Status</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <table className="min-w-full bg-white overflow-x-scroll">
            <thead>
              <tr className="w-full bg-gray-100 border-b">
                <th className="py-3 px-6 text-left">Booking ID</th>
                <th className="py-3 px-6 text-left">Customer Name</th>
                <th className="py-3 px-6 text-left">Room Type</th>
                <th className="py-3 px-6 text-left">Check-In Date</th>
                <th className="py-3 px-6 text-left">Check-Out Date</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.length > 0 ? (
                filteredBookings.map((booking) => (
                  <tr key={booking.bookingId} className="border-b">
                    <td className="py-3 px-6">{booking.bookingId}</td>
                    <td className="py-3 px-6">{booking.customerName}</td>
                    <td className="py-3 px-6">{booking.roomType}</td>
                    <td className="py-3 px-6">{booking.checkInDate}</td>
                    <td className="py-3 px-6">{booking.checkOutDate}</td>
                    <td className="py-3 px-6">{booking.status}</td>
                    <td className="py-3 px-6">
                      ${booking.totalAmount.toFixed(2)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-3 px-6 text-center">
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

export default BookingsTable;
