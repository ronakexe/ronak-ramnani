"use client"

import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger, SidebarHeader, SidebarContent } from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
    <Sidebar>
      <SidebarContent>
        {

        }
      </SidebarContent>
    </Sidebar>
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center gap-2">
          <h1 className="text-lg font-semibold">Ronak Ramnani</h1>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4">
        {/* Your page content goes here*/}
        <div>Your content here</div>
      </main>
    </SidebarInset>
  </SidebarProvider>
  )
}