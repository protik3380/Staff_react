import React, { useState } from "react";
import styled from "styled-components";
import MenuBar from "./MenuBar";
import { Outlet } from "react-router-dom";

const StaffContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #000;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  flex: 1;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
`;

const FilterButton = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: #ddd;
  border-radius: 50%;
  cursor: pointer;
`;

const TableContainer = styled.div`
  margin-top: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHeader = styled.th`
  padding: 1rem;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  font-weight: bold;
`;

const TableCell = styled.td`
  padding: 1rem;
  border: 1px solid #ddd;
  text-align: center;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }

  &.active {
    background-color: #000;
  }
`;

const Staff = () => {
  const [staffList] = useState([
    {
      id: "LM001",
      name: "Johan Abu Bakar",
      gender: "M",
      email: "johan.ab@gmail.com",
      contact: "+6019-3358788",
      status: "Active",
    },
    {
      id: "LM002",
      name: "Jamalinah binti Shah Alam",
      gender: "F",
      email: "jamalinah.sa@gmail.com",
      contact: "+6019-4458123",
      status: "Inactive",
    },
  ]);

  return (
    <StaffContainer>
      <MenuBar />

      <h2>STAFF</h2>

      <SearchContainer>
        <SearchInput placeholder="Search" />
        <SearchButton>Search</SearchButton>
        <FilterButton>🔍</FilterButton>
      </SearchContainer>

      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Gender</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Contact</TableHeader>
              <TableHeader>Status</TableHeader>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff) => (
              <tr key={staff.id}>
                <TableCell>{staff.id}</TableCell>
                <TableCell>{staff.name}</TableCell>
                <TableCell>{staff.gender}</TableCell>
                <TableCell>{staff.email}</TableCell>
                <TableCell>{staff.contact}</TableCell>
                <TableCell>{staff.status}</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <Pagination>
        <PageButton>Prev</PageButton>
        <PageButton className="active">1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>
        <PageButton>4</PageButton>
        <PageButton>5</PageButton>
        <PageButton>Next</PageButton>
      </Pagination>
 
    </StaffContainer>
  );
};

export default Staff;
