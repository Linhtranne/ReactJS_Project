
export interface PaginationProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPages: number;
  }
export interface SortButtonProps {
    sortOrder: 'asc' | 'desc';
    sortUsers: () => void;
  }
export interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
  }
export interface UserFormProps {
    newUser: { name: string; email: string; role: string };
    setNewUser: React.Dispatch<React.SetStateAction<{ name: string; email: string; role: string }>>;
    addUser: () => void;
  }
export interface UserListProps {
    users: Array<{ id: number; name: string; email: string; role: string; locked: boolean }>;
    toggleLockUser: (id: number) => void;
  }
export interface PaginationProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPages: number;
  }
export interface SortButtonProps {
    sortOrder: 'asc' | 'desc';
    sortUsers: () => void;
  }
  export interface User {
    id: string;
    name: string;
    email: string;
    isLocked: boolean;
  }
  export interface Category {
    id: string;
    name: string;
  }
  
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
}
  