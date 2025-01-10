import { useAccount } from "wagmi";

export const Header = () => {
  const { chain } = useAccount();

  //@ts-ignore
  const renderedButton = <appkit-button>Connect Button</appkit-button>;
  return (
    <header className="p-4  bg-gray-900">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-white">Logo</div>

        <div className="flex items-center gap-2">
          <div className="font-bold text-white">{chain?.name}</div>
          {renderedButton}
        </div>
      </div>
    </header>
  );
};
