"use client";
import { Camera, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function IntroSection() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="mx-auto mb-8 flex flex-col md:flex-row items-center">
      <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
        <h1 className="text-2xl font-bold text-gray-900">NGUYEN QUANG HUY</h1>
        <h2 className="text-lg text-blue-600 font-semibold">
          Software Engineer
        </h2>
        <div className="flex items-center gap-2 text-gray-600">
          <Phone size={16} /> <span>+84793345049</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Mail size={16} /> <span>huyjack2306@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Linkedin size={16} />
          <a
            href="https://www.linkedin.com/in/huy-nguyen-quang-7571b7260"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/huy-nguyen-quang-7571b7260
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={16} /> <span>Da Nang, Viet Nam</span>
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 relative w-[120px] h-[120px]">
        <label htmlFor="avatar-upload" className="cursor-pointer relative">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt="Profile Picture"
              width={180}
              height={180}
              className="rounded-full border border-gray-300"
            />
          ) : (
            <div className="w-[120px] h-[120px] flex items-center justify-center rounded-full border border-gray-300 bg-gray-200">
              <Camera size={32} className="text-gray-500" />
            </div>
          )}
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>
    </section>
  );
}
