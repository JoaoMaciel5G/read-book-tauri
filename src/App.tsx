import { useHotkeys } from 'react-hotkeys-hook';
import {open, message} from "@tauri-apps/api/dialog"

function App() {
  useHotkeys('ctrl+q' , async () => {
    const selected = await open({
      multiple: true,
      filters: [{
        name: "image",
        extensions: ["pdf", "word"]
      }]
    });

    console.log(selected)
  })

  useHotkeys('ctrl+a' , async () => {
    await message('File not found', { title: 'Tauri', type: 'warning' });
  })
  return (
    <>
     <h1 className="text-red-600">Leitor de livros</h1>
    </>
  )
}

export default App