export type Category = {
      id: number, // Added id property
      category: number,
      name: string,    
      calorias: number}

export type Activity = {
      id: string, // Cambiado a string para UUID
      category: number,
      name: string,
      calorias: number
}