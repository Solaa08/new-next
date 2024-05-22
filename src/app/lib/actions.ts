'use server'
import axios from "axios";

export async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export async function createGame(formData: FormData) {

    const rawFormData = {
      name: formData.get('name'),
      state: formData.get('state'),
    };
    await sleep(1000)
    await axios.post("http://localhost/new-next/back/", rawFormData)
      .then((response) => {
        console.log(response);
      });
  }

