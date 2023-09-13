import { Input } from "@chakra-ui/react";

export const SearchComponent = ({ onSearchChange }) => {
  return (
    <Input
      type="text"
      placeholder="Search recipes honeyyyyy"
      onChange={(e) => onSearchChange(e.target.value)}
      maxW="400px"
      my={4}
      backgroundColor="white"
    />
  );
};
