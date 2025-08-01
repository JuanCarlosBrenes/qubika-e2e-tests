import { v4 as uuidv4 } from 'uuid';


export function generateRandomEmail() {
    return `qa_user_${uuidv4()}@example.com`;
}

export const defaultPassword = 'qubika123';
export const userRole = ['ROLE_ADMIN'];