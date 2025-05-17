import React, { useState } from "react";
import { ChevronDownIcon, PinIcon, SearchIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { WormholeConnect, WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect";
import { ChainName } from "@wormhole-foundation/connect-sdk";
import { MAINNET_CHAINS, TESTNET_CHAINS } from "@wormhole-foundation/connect-sdk-evm";
import { MAINNET_TOKENS, TESTNET_TOKENS } from "@wormhole-foundation/connect-sdk-solana";

interface BridgeConfig {
  fromChain: ChainName;
  toChain: ChainName;
  token: string;
  amount: string;
}

export const FrameWrapperByAnima = (): JSX.Element => {
  const wallets = [
    {
      name: "Solflare",
      balance: "$0.00",
      percentage: "0.00",
      isPositive: false,
      bgColor: "bg-[#ffef46]",
      borderColor: "border-[#eeda0f]",
      iconSrc: "/vector-4.svg",
      isPinned: true,
    },
    {
      name: "MetaMask",
      balance: "$134.53231233213",
      percentage: "+12.345%",
      isPositive: true,
      bgColor: "bg-[#182122]",
      borderColor: "",
      iconSrc: "/group-34.png",
      isPinned: false,
    },
    {
      name: "TrustWallet",
      balance: "$5.53231233213",
      percentage: "+12.345%",
      isPositive: true,
      bgColor: "bg-[#0500ff1a]",
      borderColor: "border-dashed border-[#0500ff]",
      iconSrc: "/trust.svg",
      isPinned: false,
    },
  ];

  const timePeriods = [
    { label: "24H", isActive: true },
    { label: "1W", isActive: false },
    { label: "1M", isActive: false },
    { label: "1Y", isActive: false },
    { label: "ALL", isActive: false },
  ];

  const timeLabels = [
    { time: "10 AM", position: "left-[104px]" },
    { time: "1 PM", position: "left-[181px]" },
    { time: "4 PM", position: "left-[249px]" },
    { time: "7 PM", position: "left-[317px]" },
    { time: "10 PM", position: "left-[385px]" },
    { time: "1 AM", position: "left-[459px]" },
    { time: "4 AM", position: "left-[527px]" },
    { time: "7 AM", position: "left-[598px]" },
    { time: "10 AM", position: "left-[668px]" },
  ];

  const valueLabels = [
    { value: "$50,000", position: "top-[63px]" },
    { value: "$40,000", position: "top-[104px]" },
    { value: "$30,000", position: "top-[145px]" },
    { value: "$20,000", position: "top-[186px]" },
    { value: "$10,000", position: "top-[227px]" },
    { value: "0", position: "top-[268px]" },
  ];

  const [bridgeConfig, setBridgeConfig] = useState<BridgeConfig>({
    fromChain: TESTNET_CHAINS.ethereum,
    toChain: TESTNET_CHAINS.solana,
    token: TESTNET_TOKENS.USDC.address,
    amount: "100.00"
  });

  const config: WormholeConnectConfig = {
    env: "testnet",
    networks: [TESTNET_CHAINS.ethereum, TESTNET_CHAINS.solana],
    tokens: [TESTNET_TOKENS.USDC],
    rpcs: {
      [TESTNET_CHAINS.ethereum]: "https://goerli.infura.io/v3/your-api-key",
      [TESTNET_CHAINS.solana]: "https://api.devnet.solana.com"
    },
    bridgeDefaults: {
      fromNetwork: bridgeConfig.fromChain,
      toNetwork: bridgeConfig.toChain,
      token: bridgeConfig.token,
      amount: bridgeConfig.amount
    }
  };

  const handleBridge = async () => {
    try {
      const wormholeConnect = new WormholeConnect(config);
      await wormholeConnect.open();
    } catch (error) {
      console.error("Bridge error:", error);
    }
  };

  return (
    <section className="flex flex-col w-full items-center justify-center gap-2.5 p-4 md:p-6 lg:p-10">
      <div className="flex flex-col items-start justify-center gap-6 w-full">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
          <h1 className="font-['Prompt',Helvetica] text-2xl md:text-4xl">
            <span className="text-[#182122] font-normal">Welcome back,</span>
            <span className="font-semibold text-[#182122]"> Ebuka!</span>
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-[23px] w-full md:w-auto">
            <div className="flex w-full md:w-[324px] h-[53px] items-center gap-[7px] px-[29px] py-[13px] bg-[#f4f4f6] rounded-[10px]">
              <SearchIcon className="w-[20.36px] h-[20.36px] text-[#182122]" />
              <Input
                className="border-0 bg-transparent h-full p-0 text-lg font-['Prompt',Helvetica] placeholder:text-[#182122] focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Search"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="w-[34.34px] h-[34px]">
                <Button variant="ghost" className="p-0 h-auto">
                  <img
                    className="w-[34.34px] h-[34px]"
                    alt="Bell"
                    src="/bell.png"
                  />
                </Button>
              </div>

              <div className="w-[52.61px] h-[52.61px] bg-[#ccf888] rounded-[26.3px] bg-[url(/oval-1.png)] bg-cover bg-[50%_50%]" />

              <Button variant="ghost" className="p-0 h-auto">
                <div className="flex flex-col gap-2.5 items-center">
                  <div className="w-[7px] h-[7px] rounded-[3.49px] border border-solid border-[#182122]" />
                  <div className="w-[7px] h-[7px] rounded-[3.49px] border border-solid border-[#182122]" />
                  <div className="w-[7px] h-[7px] rounded-[3.49px] border border-solid border-[#182122]" />
                </div>
              </Button>
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row items-start gap-[30px] w-full">
          <div className="flex flex-col w-full lg:w-2/3 items-end justify-between gap-6">
            <Card className="w-full bg-[#182122] rounded-[20px] overflow-hidden border-0">
              <CardContent className="flex flex-col items-start gap-6 p-6 relative">
                <h2 className="w-full md:w-[464px] font-['Prompt',Helvetica] font-medium text-xl md:text-3xl tracking-[0] leading-[30px]">
                  <span className="text-white leading-10">
                    Upgrade Your Plan to{" "}
                  </span>
                  <span className="text-[#ccf888] leading-10">Premium</span>
                  <span className="text-white leading-10">
                    {" "}
                    and Get unlimited access
                  </span>
                </h2>

                <Button className="bg-white text-[#182122] rounded-[10px] px-6 py-2 h-auto">
                  <span className="font-['Prompt',Helvetica] font-semibold text-lg">
                    Upgrade Now
                  </span>
                </Button>

                <div className="absolute w-[169px] h-[169px] top-11 left-[392px] rotate-[-13.86deg] hidden md:block">
                  <div className="relative h-[169px]">
                    <div className="inline-flex items-center gap-2.5 p-2.5 absolute top-0 left-0">
                      <div className="relative w-[108.96px] h-[108.96px] bg-[#c1bffd] rounded-[54.48px] rotate-[30deg]" />
                    </div>
                    <img
                      className="absolute w-[54px] h-[66px] top-[51px] left-14 rotate-[13.86deg]"
                      alt="Group"
                      src="/group-21.png"
                    />
                  </div>
                </div>

                <div className="absolute w-[180px] h-[180px] top-[-33px] left-[499px] rotate-[-60deg] hidden md:block">
                  <div className="relative h-[180px]">
                    <div className="absolute w-[132px] h-[132px] top-6 left-6 bg-[#ccf888] rounded-[65.92px] rotate-[30deg]" />
                    <img
                      className="absolute w-[82px] h-[77px] top-[51px] left-[49px] rotate-[60deg]"
                      alt="Vector"
                      src="/vector-5.svg"
                    />
                  </div>
                </div>

                <img
                  className="absolute w-10 h-10 top-[133px] left-[570px] hidden md:block"
                  alt="Vector"
                  src="/vector.png"
                />

                <img
                  className="absolute w-[39px] h-[39px] top-[26px] left-[670px] hidden md:block"
                  alt="Vector"
                  src="/vector-1.png"
                />

                <div className="absolute w-24 h-24 top-[81px] left-[639px] rotate-[105.89deg] hidden md:block">
                  <div className="relative w-[146px] h-[146px] top-[-25px] left-[-25px]">
                    <div className="absolute w-[71px] h-[71px] top-[38px] left-[38px] bg-[#534fff] rounded-[35.35px]" />
                    <img
                      className="absolute w-[118px] h-[118px] top-3.5 left-3.5 rotate-[-105.89deg]"
                      alt="Vector"
                      src="/vector-2.svg"
                    />
                  </div>
                </div>

                <img
                  className="absolute w-[45px] h-[45px] top-[123px] left-[241px] hidden md:block"
                  alt="Start up"
                  src="/start-up-02.png"
                />

                <div className="flex w-[114px] h-[114px] items-center gap-2.5 px-9 py-[25px] absolute top-[110px] left-[298px] bg-[#534fff] rounded-[56.79px] rotate-[-16.34deg] hidden md:flex">
                  <img
                    className="relative w-[57.4px] h-[53.71px] mt-[-3.39px] ml-[-5.33px] mr-[-10.50px] rotate-[16.34deg]"
                    alt="Group"
                    src="/group-23.png"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="w-full bg-[#f4f4f6] rounded-[20px] border-0">
              <CardContent className="p-4 md:p-6">
                <ScrollArea className="w-full">
                  <div className="flex items-center gap-4">
                    {wallets.map((wallet, index) => (
                      <Card
                        key={index}
                        className="flex-shrink-0 w-[250px] md:w-[289.68px] bg-white rounded-[15px] border-0"
                      >
                        <CardContent className="flex flex-col items-center gap-2 p-4 relative">
                          <div className="flex w-[137px] h-[136px] items-center gap-2.5 p-[11px] relative">
                            <div className="absolute w-[137px] h-[136px] top-0 left-0 rounded-[68.5px/68px] border-[3px] border-dashed border-[#534fff]" />
                            <div
                              className={`relative w-[115px] h-[117px] mt-[-1.50px] mb-[-1.50px] ml-[-1.00px] ${wallet.bgColor} rounded-[57.5px/58.5px] ${wallet.borderColor ? `border-2 border-solid ${wallet.borderColor}` : ""}`}
                            />
                            <img
                              className="absolute w-[55px] h-[58px] top-[39px] left-[41px]"
                              alt={wallet.name}
                              src={wallet.iconSrc}
                            />
                          </div>

                          <div className="flex flex-col w-[149px] items-center gap-[11px]">
                            <div className="font-['Prompt',Helvetica] font-medium text-[#534fff] text-lg text-center tracking-[0] leading-[18px] w-full">
                              {wallet.name}
                            </div>
                            <div className="font-['Prompt',Helvetica] font-semibold text-[#182122] text-3xl text-center tracking-[0] leading-[30px] w-full">
                              {wallet.balance}
                            </div>
                            <div className="flex items-center gap-[5px]">
                              <div
                                className={`flex w-[74px] h-[22px] items-center justify-center gap-2.5 px-[11px] py-[5px] ${wallet.isPositive ? "bg-[#ccf888]" : "bg-[#00000040]"} rounded-[30px]`}
                              >
                                <div className="font-['Prompt',Helvetica] font-semibold text-[#1e1e1e] text-xs text-center tracking-[0] leading-3 whitespace-nowrap">
                                  {wallet.percentage}
                                </div>
                              </div>
                              {wallet.isPositive && (
                                <img
                                  className="w-[22px] h-[22px]"
                                  alt="Frame"
                                  src="/frame-1000003005.svg"
                                />
                              )}
                            </div>
                          </div>

                          {wallet.isPinned && (
                            <PinIcon className="absolute w-8 h-8 top-2.5 right-2.5 text-gray-500" />
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </CardContent>
            </Card>

            <div className="relative w-full h-[318px] overflow-x-auto">
              <div className="flex items-center gap-4 mb-4">
                <div className="font-['Prompt',Helvetica] font-semibold text-[#534fff] text-sm">
                  Portfolio performance
                </div>
                <div className="font-['Prompt',Helvetica] font-semibold text-[#182122] text-sm text-center ml-8">
                  Statistics
                </div>
                <div className="font-['Prompt',Helvetica] font-semibold text-[#182122] text-sm text-center">
                  Transactions
                </div>
                <img
                  className="w-[50px] h-0.5 absolute top-[31px] left-[50px]"
                  alt="Line"
                  src="/line-1.svg"
                />
              </div>

              <Tabs defaultValue="24H" className="absolute right-0 top-0">
                <TabsList className="bg-transparent gap-1">
                  {timePeriods.map((period, index) => (
                    <TabsTrigger
                      key={index}
                      value={period.label}
                      className={`w-[63px] h-8 rounded-[50px] ${
                        period.isActive
                          ? "bg-[#182122] text-white"
                          : "bg-transparent border border-solid border-[#182122] text-[#182122]"
                      }`}
                    >
                      {period.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <div className="absolute w-[650px] h-56 top-[59px] left-[84px]">
                <img
                  className="absolute w-[650px] h-0.5 top-[58px] left-0"
                  alt="Line"
                  src="/line-7.svg"
                />
                <img
                  className="absolute w-px h-[180px] top-11 left-[342px] object-cover"
                  alt="Line"
                  src="/line-10.svg"
                />
                <img
                  className="absolute w-[650px] h-0.5 top-[222px] left-0"
                  alt="Line"
                  src="/line-7.svg"
                />
                <img
                  className="absolute w-[650px] h-0.5 top-[181px] left-0"
                  alt="Line"
                  src="/line-7.svg"
                />
                <img
                  className="absolute w-[650px] h-0.5 top-[140px] left-0"
                  alt="Line"
                  src="/line-7.svg"
                />
                <img
                  className="absolute w-[650px] h-0.5 top-[99px] left-0"
                  alt="Line"
                  src="/line-7.svg"
                />
                <img
                  className="absolute w-[650px] h-0.5 top-[17px] left-0"
                  alt="Line"
                  src="/line-7.svg"
                />

                <img
                  className="absolute w-[550px] h-40 top-[42px] left-[47px]"
                  alt="Vector"
                  src="/vector-1-1.svg"
                />
                <img
                  className="absolute w-[113px] h-[84px] top-[59px] left-[284px]"
                  alt="Vector"
                  src="/vector-2-1.svg"
                />

                <div className="absolute w-[15px] h-[15px] top-[60px] left-[335px] bg-[#1e1e1e] rounded-[7.5px] border-2 border-solid border-[#ccf888] shadow-[0px_4px_4px_#00000040]" />
                <div className="absolute w-[92px] h-[51px] top-0 left-[297px] bg-[#182122] rounded-[10px]">
                  <div className="absolute top-[17px] left-[304px] font-semibold text-white text-xl text-center leading-[normal] font-['Prompt',Helvetica] tracking-[0]">
                    $34,567
                  </div>
                  <div className="absolute top-[5px] left-[304px] font-normal text-[#c1bffd] leading-[normal] font-['Prompt',Helvetica] text-xs tracking-[0]">
                    -$89,012
                  </div>
                  <div className="absolute w-3 h-3 top-2 left-[368px] bg-[#ccf888] rounded-md" />
                  <img
                    className="absolute w-[15px] h-3.5 top-[43px] left-[335px]"
                    alt="Polygon"
                    src="/polygon-1.svg"
                  />
                  <img
                    className="absolute w-1.5 h-1.5 top-[11px] left-[371px] object-cover"
                    alt="Line"
                    src="/line-8.svg"
                  />
                </div>
              </div>

              {valueLabels.map((label, index) => (
                <div
                  key={index}
                  className={`absolute ${label.position} left-0 font-normal text-[#182122] text-sm leading-[normal] font-['Prompt',Helvetica] tracking-[0] ${label.value === "0" ? "w-2.5 whitespace-nowrap" : ""}`}
                >
                  {label.value}
                </div>
              ))}

              {timeLabels.map((label, index) => (
                <div
                  key={index}
                  className={`w-[43px] ${label.position} absolute top-[303px] font-['Prompt',Helvetica] font-normal text-[#182122] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap`}
                >
                  {label.time}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 w-full lg:w-1/3">
            <Card className="w-full bg-[#f4f4f6] rounded-[20px] border-0">
              <CardContent className="flex flex-col items-center justify-center gap-6 p-6">
                <div className="relative w-[136.81px] h-[136px] rounded-[68.41px/68px] border-[2.44px] border-dashed border-[#534fff]">
                  <div className="relative w-[114px] h-[114px] top-[11px] left-[11px]">
                    <div className="absolute w-[113px] h-[114px] top-0 left-0 bg-[#ccf888] rounded-[56.64px/57.01px]" />
                    <img
                      className="absolute w-[114px] h-[114px] top-0 left-0 object-cover"
                      alt="Oval"
                      src="/oval-1.png"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-[162px] items-center gap-1.5">
                  <div className="w-full h-4 font-['Prompt',Helvetica] font-medium text-[#534fff] text-lg text-center tracking-[0] leading-10 whitespace-nowrap">
                    Total Balance
                  </div>
                  <div className="w-full h-10 font-semibold text-[#182122] text-3xl text-center leading-10 whitespace-nowrap font-['Prompt',Helvetica] tracking-[0]">
                    $12,345.67
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <div className="flex w-[74px] h-[22px] items-center justify-center gap-2.5 px-[9px] py-1 bg-[#ccf888] rounded-[30px]">
                      <div className="font-semibold text-[#1e1e1e] text-center leading-10 whitespace-nowrap font-['Prompt',Helvetica] text-xs tracking-[0]">
                        +12.345%
                      </div>
                    </div>
                    <img
                      className="w-[22px] h-[22px]"
                      alt="Frame"
                      src="/frame-1000003005.svg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full flex-grow bg-[#f4f4f6] rounded-[20px] border-0">
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <h2 className="font-['Prompt',Helvetica] font-normal text-[#182122] text-2xl leading-6">
                  <span className="font-semibold">Bridge Your </span>
                  <span className="font-semibold italic underline">tokens</span>
                </h2>

                <div className="flex flex-col items-start gap-1 w-full">
                  <label className="font-['Prompt',Helvetica] font-medium text-[#182122] text-sm">
                    From
                  </label>
                  <Button
                    variant="outline"
                    className="flex h-[60px] items-center justify-between p-4 w-full bg-white rounded-[10px] border-0 hover:bg-white/90"
                    onClick={() => setBridgeConfig({
                      ...bridgeConfig,
                      fromChain: bridgeConfig.fromChain === TESTNET_CHAINS.ethereum ? TESTNET_CHAINS.solana : TESTNET_CHAINS.ethereum
                    })}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#182122] rounded-[5px] flex items-center justify-center">
                        <img
                          className="w-[22px] h-5"
                          alt={bridgeConfig.fromChain === TESTNET_CHAINS.ethereum ? "MetaMask" : "Solana"}
                          src={bridgeConfig.fromChain === TESTNET_CHAINS.ethereum ? "/group-34-1.png" : "/frame-1000002970.svg"}
                        />
                      </div>
                      <span className="font-['Prompt',Helvetica] font-semibold text-[#182122] text-[22px]">
                        {bridgeConfig.fromChain === TESTNET_CHAINS.ethereum ? "MetaMask" : "Solana"}
                      </span>
                    </div>
                    <ChevronDownIcon className="w-[22px] h-[22px]" />
                  </Button>
                </div>

                <div className="flex flex-col items-start gap-1 w-full">
                  <label className="font-['Prompt',Helvetica] font-medium text-[#182122] text-sm">
                    To
                  </label>
                  <Button
                    variant="outline"
                    className="flex h-[60px] items-center justify-between p-4 w-full bg-white rounded-[10px] border-0 hover:bg-white/90"
                    onClick={() => setBridgeConfig({
                      ...bridgeConfig,
                      toChain: bridgeConfig.toChain === TESTNET_CHAINS.ethereum ? TESTNET_CHAINS.solana : TESTNET_CHAINS.ethereum
                    })}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        className="w-[42px] h-[42px]"
                        alt={bridgeConfig.toChain === TESTNET_CHAINS.solana ? "Solflare" : "MetaMask"}
                        src={bridgeConfig.toChain === TESTNET_CHAINS.solana ? "/frame-1000002970.svg" : "/group-34-1.png"}
                      />
                      <span className="font-['Prompt',Helvetica] font-semibold text-[#182122] text-[22px]">
                        {bridgeConfig.toChain === TESTNET_CHAINS.solana ? "Solflare" : "MetaMask"}
                      </span>
                    </div>
                    <ChevronDownIcon className="w-[22px] h-[22px]" />
                  </Button>
                </div>

                <div className="flex flex-col items-start gap-1 w-full">
                  <label className="font-['Prompt',Helvetica] font-medium text-[#182122] text-sm">
                    Amount
                  </label>
                  <div className="flex h-[60px] items-center justify-between p-4 w-full bg-white rounded-[10px]">
                    <Input
                      type="number"
                      value={bridgeConfig.amount}
                      onChange={(e) => setBridgeConfig({
                        ...bridgeConfig,
                        amount: e.target.value
                      })}
                      className="font-['Prompt',Helvetica] font-medium text-[#182122] text-[22px] border-0 p-0"
                    />
                    <Button
                      variant="ghost"
                      className="h-10 flex items-center justify-center gap-2 px-2.5 py-2 bg-[#f4f4f6] rounded-[5px]"
                    >
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-[17px]">
                          <div className="h-4 bg-white rounded-lg bg-[url(/vector-6.svg)] bg-[100%_100%]" />
                        </div>
                        <span className="font-['Prompt',Helvetica] font-medium text-[#182122] text-base leading-4 whitespace-nowrap">
                          USDC
                        </span>
                      </div>
                      <ChevronDownIcon className="w-[22px] h-[22px]" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="font-['Prompt',Helvetica] font-light text-[#ff4f4f] text-[15.3px]">
                      Fees:
                    </div>
                    <div className="font-['Prompt',Helvetica] font-semibold text-[#ff4f4f] text-[15.3px]">
                      $1.02
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="font-['Prompt',Helvetica] font-light text-[#182122] text-[22px]">
                      Total:
                    </div>
                    <div className="font-['Prompt',Helvetica] font-semibold text-[#182122] text-[22px]">
                      ${(parseFloat(bridgeConfig.amount) + 1.02).toFixed(2)}
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full px-[63px] py-[15px] bg-[#182122] rounded-[10px] text-white"
                  onClick={handleBridge}
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-6 h-6 relative">
                      <img
                        className="absolute w-[18px] h-[17px] top-1 left-[3px]"
                        alt="Bridge icon"
                        src="/group.png"
                      />
                    </div>
                    <span className="font-['Prompt',Helvetica] text-lg">
                      <span className="font-semibold">Bridge </span>
                      <span className="italic underline">${bridgeConfig.amount}USDC</span>
                    </span>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};