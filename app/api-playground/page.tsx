'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Copy, Terminal, Send, Check } from "lucide-react";

const ENDPOINTS = [
    {
        name: "Get All Facilities",
        method: "GET",
        path: "/v1/facilities",
        description: "Returns a paginated list of all registered healthcare facilities.",
        mockResponse: {
            status: "success",
            data: [
                { id: "f-01", name: "Lagos University Teaching Hospital", type: "Tertiary", state: "Lagos" },
                { id: "f-02", name: "Ibadan General Hospital", type: "Secondary", state: "Oyo" }
            ],
            meta: { total: 4500, page: 1, limit: 10 }
        }
    },
    {
        name: "Search Emergency Services",
        method: "GET",
        path: "/v1/emergency?type=ambulance",
        description: "Find active emergency responders by type and location.",
        mockResponse: {
            status: "success",
            data: [
                { id: "e-10", agency: "LASAMBUS", contact: "122", coverage: ["Ikeja", "Victoria Island"] }
            ]
        }
    }
];

export default function APIPlayground() {
    const [selectedIdx, setSelectedIdx] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);
    const [response, setResponse] = React.useState<any>(null);
    const [copied, setCopied] = React.useState(false);

    const active = ENDPOINTS[selectedIdx];

    const handleSend = () => {
        setIsLoading(true);
        setTimeout(() => {
            setResponse(active.mockResponse);
            setIsLoading(false);
        }, 600);
    };

    const copyCurl = () => {
        const curl = `curl -X ${active.method} "https://api.openhealth.ng${active.path}" \\
  -H "Authorization: Bearer YOUR_TOKEN"`;
        navigator.clipboard.writeText(curl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-6xl space-y-8 py-4">
            <div className="space-y-2">
                <Badge variant="outline" className="text-primary border-primary/20">Interactive</Badge>
                <h1 className="text-3xl font-bold tracking-tight">API Playground</h1>
                <p className="text-muted-foreground max-w-2xl">
                    Experience the <strong>OpenHealth NG</strong> system in real-time. 
                    Configure requests, explore schemas, and see live responses.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Sidebar - Endpoint Selection */}
                <div className="lg:col-span-4 space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground px-2">Endpoints</h2>
                    <div className="space-y-1">
                        {ENDPOINTS.map((ep, idx) => (
                            <button
                                key={ep.name}
                                onClick={() => {
                                    setSelectedIdx(idx);
                                    setResponse(null);
                                }}
                                className={`w-full text-left p-3 rounded-lg transition-all border ${
                                    selectedIdx === idx 
                                    ? "bg-primary/5 border-primary/20 text-primary" 
                                    : "hover:bg-muted border-transparent"
                                }`}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-bold bg-primary/10 px-1.5 py-0.5 rounded leading-none">
                                        {ep.method}
                                    </span>
                                    <span className="text-xs font-mono truncate">{ep.path}</span>
                                </div>
                                <div className="text-sm font-medium">{ep.name}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Playground */}
                <div className="lg:col-span-8 space-y-6">
                    <Card>
                        <CardHeader className="pb-4">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Request Configuration</CardTitle>
                                <Button size="sm" variant="outline" onClick={copyCurl} className="gap-2">
                                    {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
                                    <span className="text-xs">Copy cURL</span>
                                </Button>
                            </div>
                            <CardDescription>{active.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex gap-2">
                                <div className="bg-muted px-3 py-2 rounded border font-mono text-sm flex items-center">
                                    {active.method}
                                </div>
                                <Input 
                                    readOnly 
                                    value={`https://api.openhealth.ng${active.path}`} 
                                    className="font-mono text-xs bg-muted/30"
                                />
                                <Button onClick={handleSend} disabled={isLoading} className="gap-2">
                                    <Send className="size-4" />
                                    {isLoading ? "..." : "Send"}
                                </Button>
                            </div>

                            <Separator />

                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold">Response</h3>
                                <ScrollArea className="h-[300px] w-full rounded-md border bg-zinc-950 p-4">
                                    {response ? (
                                        <pre className="text-xs text-zinc-300 font-mono leading-relaxed">
                                            {JSON.stringify(response, null, 2)}
                                        </pre>
                                    ) : (
                                        <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-2">
                                            <Terminal className="size-8 opacity-20" />
                                            <p className="text-xs">Click "Send" to execute the request</p>
                                        </div>
                                    )}
                                </ScrollArea>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}