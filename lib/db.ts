// This is a mock database for demonstration purposes
// In a real application, you would use a proper database like MongoDB, PostgreSQL, etc.

import { v4 as uuidv4 } from "uuid"
import { hashPassword } from "./auth"

export interface User {
  id: string
  email: string
  name: string
  password: string
  role: string
  lastViewed?: string
  createdAt: Date
  updatedAt: Date
}

// Mock database
const users: User[] = []

// User operations
export async function createUser(userData: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User> {
  const id = uuidv4()
  const hashedPassword = await hashPassword(userData.password)

  const newUser: User = {
    id,
    email: userData.email,
    name: userData.name,
    password: hashedPassword,
    role: userData.role || "user",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  users.push(newUser)
  return newUser
}

export async function findUserByEmail(email: string): Promise<User | undefined> {
  return users.find((user) => user.email === email)
}

export async function findUserById(id: string): Promise<User | undefined> {
  return users.find((user) => user.id === id)
}

export async function updateUserLastViewed(userId: string, configId: string): Promise<User | undefined> {
  const userIndex = users.findIndex((user) => user.id === userId)

  if (userIndex === -1) {
    return undefined
  }

  users[userIndex] = {
    ...users[userIndex],
    lastViewed: configId,
    updatedAt: new Date(),
  }

  return users[userIndex]
}
// Initialize with a test user
;(async () => {
  if (users.length === 0) {
    await createUser({
      email: "test@example.com",
      name: "Test User",
      password: "password123",
      role: "user",
    })
  }
})()

