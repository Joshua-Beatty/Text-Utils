'use client'
import { useState } from "react";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Copy } from "lucide-react";
import TextTransition, { presets } from "react-text-transition";
import { useDebounceCallback } from "usehooks-ts";

function UtilRenderer({ name, util }: { name: string; util: Util }) {
  const [input, setInput] = useState("");
  const [copiedText, setCopyText] = useState("Copy Output");
  const setCopyDebounced = useDebounceCallback(setCopyText, 1500)
  
  let output: ReturnType<typeof util>
  if(input.trim() != ""){
    try {
        output = util(input);
    } catch(e){
        output = {
            output: `${e}`
        }
    }
  } else {
    output = {output: ""}
  }

  return (
    <>
      <div className="px-4 flex gap-4 flex-col w-full pt-4">
        <h1>{name}</h1>
        <Textarea
          rows={12}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Textarea rows={12} value={output.output} />
        <div>
            <Button 
                className="w-40" 
                variant="outline" 
                onClick={() => {
                    navigator.clipboard.writeText(output.output)
                    setCopyText("Copied!")
                    setCopyDebounced("Copy Output")
                }}
            >
                <Copy /> <TextTransition className="w-full flex justify-center" springConfig={presets.default}>{copiedText}</TextTransition>
            </Button>
        </div>
        
        {Object.entries(output.metaData || {}).map((x) => (
          <h4>{x[0]}: {x[1]}</h4>
        ))}
      </div>
    </>
  );
}

export default UtilRenderer;
