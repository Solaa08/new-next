
import Button from "./nectron/Button";
import Form from "./nectron/Form";
import Input from "./nectron/Input";

import { VARIANT } from "./nectron/variant";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between p-24 text-sm">
      <Form>
        <Input></Input>
        <Button variant={VARIANT.PRIMARY}>Test</Button>
      </Form>
    </main>
  );
}
