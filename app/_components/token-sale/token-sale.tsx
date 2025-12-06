import React, { Fragment } from "react";
import Countdown from "./countdown";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";
import { BUY_TOKEN_URL, TOKEN_SYMBOL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface TokenSaleFormProps {
  isLoading: boolean;
  data: APITokenInfoResponse | undefined;
  error: Error | null;
}

export default function TokenSaleForm({
  isLoading,
  data,
  error,
}: TokenSaleFormProps) {
  // const tokenNextPrice =
  //   Number(process.env.NEXT_PUBLIC_TOKEN_NEXT_PRICE) || 0.012;
  const tokenNextPrice =data?.response ? Number(data.response.next_price) : Number(process.env.NEXT_PUBLIC_TOKEN_NEXT_PRICE) || 0.012;
  const tokenListingPrice =
    Number(process.env.NEXT_PUBLIC_TOKEN_LISTING_PRICE) || 0.75;
  const holderCount = Number(process.env.NEXT_PUBLIC_HOLDER_COUNT) || 12136;
  const showHolderCount =
    process.env.NEXT_PUBLIC_SHOW_HOLDER_COUNT?.toLowerCase() === "true";
  const tokenPrice = data?.response ? Number(data.response.price) : 0.01;
  const nextPricePercentage = (
    ((tokenNextPrice - tokenPrice) / tokenPrice) *
    100
  ).toFixed(0);
  const listingPricePercentage = (
    ((tokenListingPrice - tokenPrice) / tokenPrice) *
    100
  ).toFixed(0);

  // const soldAmount = data?.response
  //   ? Number(data.response.sold_amount.replace(/,/g, "").split(" ")[0])
  //   : 0;
  // const totalAmount = data?.response
  //   ? Number(data.response.total_amount.replace(/,/g, "").split(" ")[0])
  //   : 0;
  // const progress = Math.min(100, (soldAmount / totalAmount) * 100);

  // Date calculations
  const startDate = data ? data?.response.start : null;
  const endDate = data ? data?.response.end : null;
  const isLive =
    startDate && endDate
      ? new Date() >= new Date(startDate) && new Date() <= new Date(endDate)
      : false;

  return (
    <div className="flex w-full h-fit items-center justify-center lg:justify-start mt-[10vh] z-40">
      <Card className="bg-e3mel-ice border-none shadow-none rounded-3xl w-full md:w-[525px] h-full flex flex-col items-center gap-2 md:gap-5 p-5">
        {/* Title */}
        <div className="flex flex-col items-center w-full gap-1 p-2 text-white bg-e3mel-green rounded-xl">
          <h2 className="text-xl font-bold text-center md:text-3xl">
            BUY ${TOKEN_SYMBOL} AT $
            {tokenPrice.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 4,
            })}
          </h2>
          <p className="text-lg font-medium text-center line-through">
            from $
            {tokenNextPrice.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 4,
            })}
          </p>
        </div>

        <div className="grid w-full h-full grid-cols-3 gap-2 text-white md:gap-5">
          <div className="relative flex flex-col items-center justify-start w-full p-2 bg-green-500 h-28 rounded-xl">
            <div className="absolute h-28 -mt-2 p-2 rounded-xl w-full bg-e3mel-green blur-[15px] z-10" />
            <p className="z-20 text-sm font-normal text-center md:text-base whitespace-nowrap">
              Current Price
            </p>
            <p className="z-20 mt-2 text-2xl font-medium md:text-3xl">
              $
              {tokenPrice.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 4,
              })}
            </p>
          </div>

          <div className="flex flex-col items-center justify-between w-full p-2 text-black bg-transparent border-4 h-28 border-e3mel-green rounded-xl">
            <p className="text-sm font-normal text-center md:text-base whitespace-nowrap">
              Next Price
            </p>
            <p className="text-2xl font-medium md:text-3xl">
              $
              {tokenNextPrice.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 4,
              })}
            </p>
            <p className="text-[10px] md:text-xs font-normal text-center">
              (+{nextPricePercentage}%) increase
            </p>
          </div>

          <div className="flex flex-col items-center justify-between w-full p-2 text-black bg-transparent border-4 h-28 border-e3mel-green rounded-xl">
            <p className="text-sm font-normal text-center md:text-base whitespace-nowrap">
              Listing Price
            </p>
            <p className="text-2xl font-medium md:text-3xl">
              $
              {tokenListingPrice.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 4,
              })}
            </p>
            <p className="text-[10px] md:text-xs font-normal text-center">
              (+{listingPricePercentage}%) increase
            </p>
          </div>
        </div>

        <div className="flex items-center -mb-4 text-black">
          <p className="text-sm font-medium md:text-lg">
            {isLive ? "⚡️ The price increases in" : "Starts in"}
          </p>
        </div>

        {isLoading ? (
          <Fragment>
            <Skeleton className="w-full h-16 mx-auto rounded-xl" />

            <div className="flex flex-row items-center justify-center w-full gap-4">
              <Skeleton className="w-64 h-12" />
              <Skeleton className="w-40 h-16" />
            </div>

            <div className="flex justify-center w-full">
              <div className="flex items-center gap-4">
                <Skeleton className="h-16 rounded-md w-28" />
                <Skeleton className="h-16 rounded-md w-28" />
                <Skeleton className="h-16 rounded-md w-28" />
              </div>
            </div>
          </Fragment>
        ) : error ? (
          <div className="text-red-400">Failed to load data</div>
        ) : data ? (
          <div className="flex flex-col space-y-3">
            <Countdown
              targetDate={isLive ? new Date(endDate!) : new Date(startDate!)}
            />

            <div className="flex flex-row items-center justify-center w-full gap-4">
              <p
                className={cn(
                  "text-lg font-bold text-black md:text-2xl whitespace-nowrap",
                  !showHolderCount && "hidden"
                )}
              >
                {holderCount.toLocaleString("en-US")}{" "}
                <span className="text-e3mel-green">HOLDERS</span>
              </p>

              <Link
                href={BUY_TOKEN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="p-6 text-lg text-white cursor-pointer bg-e3mel-green hover:bg-e3mel-green/90 md:text-2xl">
                  Buy NOW
                </Button>
              </Link>
            </div>

            <div className="flex justify-center w-full">
              <div className="flex items-center gap-4">
                <div className="flex flex-row items-center gap-1 p-2 border border-gray-300 rounded-md">
                  <Image
                    src="/images/tokens/eth.png"
                    alt="ETH"
                    width={30}
                    height={30}
                  />
                  <p className="text-base font-medium text-black">ETH</p>
                </div>
                <div className="flex flex-row items-center gap-1 p-2 border border-gray-300 rounded-md">
                  <Image
                    src="/images/tokens/usdt.png"
                    alt="USDT"
                    width={30}
                    height={30}
                  />
                  <p className="text-base font-medium text-black">USDT</p>
                </div>
                <div className="flex flex-row items-center gap-1 p-2 border border-gray-300 rounded-md">
                  <Image
                    src="/images/tokens/card.png"
                    alt="Card"
                    width={30}
                    height={30}
                  />
                  <p className="text-base font-medium text-black">CARD</p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Card>
    </div>
  );
}
