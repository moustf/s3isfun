import { ChangeEvent, FC, useState } from 'react';
import axios from 'axios';

const App: FC = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [message, setMessage] = useState<string>('');

  const uploadFile = async (file: File): Promise<void> => {
    const res = await axios.get(`http://localhost:8080/api/v1/upload?fileName=${file.name}`);

    await axios.put(res.data.presignedUrl, file);
  };

  const onSubmit = async (): Promise<void> => {
    const n = files?.length || 0;

    for (let i = 0; i < n; i += 1) {
      const file = files?.[i] as File;

      uploadFile(file);
    }
  };

  return (
    <div>
      <input
        name="message"
        type="text"
        value={message}
        onChange={
          (e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)
        }
      />
      <br />
      <input
        name="files"
        type="file"
        multiple
        onChange={
          (e: ChangeEvent<HTMLInputElement>) => setFiles(e.target.files)
        }
      />
      <br />
      <input
        type="submit"
        value="Submit"
        onClick={onSubmit}
      />
    </div>
  );
};

export default App;
