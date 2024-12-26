"use client";
import { Text } from "@repo/ui/texts";
import { Button } from "@repo/ui/buttons";
import { Dropdown, TransactionType } from "@repo/ui/dropdown";
import { LogoIcon } from "@repo/ui/icons";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center min-h-screen bg-primary">
      <Text intent="Heading" color="black" text="vamo ver"></Text>
      <Text
        intent="Regular"
        color="secondary"
        text="The quick brown fox jumps over the lazy dog"
      ></Text>
      <Text
        intent="Small"
        color="negative"
        text="The quick brown fox jumps over the lazy dog"
      ></Text>
      <Text
        intent="ExtraSmall"
        color="black"
        text="The quick brown fox jumps over the lazy dog"
      ></Text>

      <Button
        intent="primary"
        text="Concluir"
        spacing="mSmall"
        onClick={(event) => {
          console.log("clicou no primeiro botao");
        }}
      ></Button>
      <Button
        intent="secondary"
        text="Concluir transação"
        spacing="mMedium"
        onClick={(event) => {
          console.log("clicou no primeiro botao");
        }}
      ></Button>
      <Button
        intent="secondaryVariant"
        text="Concluir transação"
        spacing="mMedium"
        onClick={(event) => {
          console.log("clicou no primeiro botao");
        }}
      ></Button>
      <Button
        intent="negative"
        text="Vamos ver"
        spacing="mBig"
        onClick={(event) => {
          console.log("clicou no primeiro botao");
        }}
      ></Button>

      <Dropdown
        onSelect={(item: TransactionType) => console.log(item)}
      ></Dropdown>

      <LogoIcon></LogoIcon>
    </main>
  );
}
