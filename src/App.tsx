import { useState } from "react";
import { Button } from "./components/ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import utils from "./utils";
import useHash from "./hooks/use-hash";
import UtilRenderer from "./UtilRenderer";
const defaultUtil = Object.keys(utils)[0]
function App() {
  const [hash, setSelected] = useHash()
  const selected = utils[hash] ? hash : defaultUtil
  const util = utils[selected][0]

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" >
        <SidebarHeader >Text Utils</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Utilities</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {Object.entries(utils).map((item) => {
                  const Icon = item[1][1]
                  return (
                  <SidebarMenuItem key={item[0]}>
                    <SidebarMenuButton onClick={()=>setSelected(item[0])}>
                        {Icon}
                        <span>{item[0]}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )})}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      <main className="w-full">
        <UtilRenderer name={selected} util={util}/>
      </main>
    </SidebarProvider>
  );
}

export default App;
