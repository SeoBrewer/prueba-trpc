// Default Import Statements

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

// Add the following Import Statements

import {useState} from "react";

import {trpc} from "./trpc";
import {httpBatchLink} from "@trpc/client";
import AppComponent from "./AppComponent";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import "./index.scss";

const client = new QueryClient();

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: client-side</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
