import React from "react";
import Icon from "../assets/gem.png";

function Footer() {
  return (
    <div>
      <footer class="bg-white rounded-lg shadow my-12">
        <div class=" me-28 ms-28 mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={Icon} class="h-8" alt="company logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">
                GemAnalyzer
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 ">
              <li>
                <a href="/" class="hover:underline me-4 md:me-6">
                  Home
                </a>
              </li>
              <li>
                <a href="/" class="hover:underline me-4 md:me-6">
                  Aboutus
                </a>
              </li>
              <li>
                <a href="/" class="hover:underline me-4 md:me-6">
                  Instructions
                </a>
              </li>
              <li>
                <a href="/imageuploader" class="hover:underline">
                  Analyse
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-black sm:text-center ">
            © 2024 GemAnalyzer . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
