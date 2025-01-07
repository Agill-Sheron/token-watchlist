"use client"

import * as React from "react"
import { useState } from "react"
import { Check, Plus } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useTokenSearch } from "@/lib/hooks/useTokenSearch"
import { useWatchlistStore } from "@/store/watchlist"
import { Token } from "@/lib/types/token.types"
import Image from "next/image"
import { Skeleton } from "../ui/skeleton"

interface TokenSearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NUM_ITEMS = 10

export function TokenSearchDialog({ open, onOpenChange }: TokenSearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const { data: tokens, isLoading } = useTokenSearch(
    searchQuery ? { filter: searchQuery, limit: NUM_ITEMS } : undefined
  )
  
  const { addToken, isInWatchlist } = useWatchlistStore()

  const handleSelect = (token: Token) => {
    if (!isInWatchlist(token.token_ca)) {
      addToken(token)
    }
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Search Tokens</DialogTitle>
        </DialogHeader>
        <Command shouldFilter={false} className="rounded-lg">
          <CommandInput
            placeholder="Search by token name or ticker..."
            value={searchQuery}
            onValueChange={(value) => setSearchQuery(value)}
            className="border-none focus:ring-0"
          />
          <CommandList>
            <CommandEmpty>
              {isLoading ? (
                <CommandItemsSkeleton />
              ) : (
                "No tokens found."
              )}
            </CommandEmpty>
            <CommandGroup className="max-h-[300px] overflow-auto">
              {tokens?.map((token) => (
              
                  <CommandItem
                    key={token.token_ca}
                    value={token.token_ca}
                    onSelect={() => handleSelect(token)}
                    className="flex items-center gap-3 cursor-pointer"
                >
                  <Image
                    src={token.token_icon || "/placeholder.png"}
                    alt={token.token_name || "Token Icon"}
                    width={24}
                    height={24}
                    className="rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{token.token_name}</p>
                    <p className="text-sm text-gray-500">{token.token_ticker}</p>
                  </div>
                  {isInWatchlist(token.token_ca) ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Plus className="h-4 w-4 opacity-50" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
} 


function CommandItemsSkeleton() {
  return (
    Array.from({ length: NUM_ITEMS }).map((_, index) => (
      <div key={index} className="flex flex-col gap-4 items-center space-y-4 w-full py-2">
        <Skeleton className="h-11 w-full rounded-md" />
      </div>
    ))
  )
}