'use client'

import { useState, useEffect } from "react";

export default function Footer() {
    return (
        <footer className={"bg-primary text-sm md:text-base lg:text-lg font-title text-center text-white py-4 px-12 flex flex-row justify-center items-center"}>
            <h2>© 2024 DULL Research Group | We are part of <a href="www.iit.du.ac.bd"><b>Institue of Information Technology</b></a> at the <a href="www.du.ac.bd"><b>University of Dhaka</b></a></h2>
        </footer>
    )
}