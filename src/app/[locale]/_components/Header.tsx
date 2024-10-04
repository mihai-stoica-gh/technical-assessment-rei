'use client';

import LangSwitcher from "./LangSwitcher";
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div>
                <div>
                    <h1>AppName</h1>
                    <LangSwitcher></LangSwitcher>
                </div>
                <div></div>
            </div>
        </header>
    );
}