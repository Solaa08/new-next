'use server'
import axios from "axios";

export async function getGames() {
    const response = await axios.get("http://localhost/new-next/back/")
    console.log(response.data) 
    return response.data
  }
