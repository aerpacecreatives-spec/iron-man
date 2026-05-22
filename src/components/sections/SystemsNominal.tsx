"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

export function SystemsNominal() {
  return (
    <section
      id="Contact"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:grid md:grid-cols-[5fr_4fr] md:gap-20">
        <AnimatedSection className="flex flex-col gap-8">
          <AnimatedItem>
            <EyebrowBadge> DEV // ZIGNESH </EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[16ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              &ldquo;And I&hellip; am &hellip;{" "}
              <span className="text-accent">Zignesh .</span>&rdquo;
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
             I'm a skilled JavaScript developer with expertise in React, Node.js, Express.js, and MongoDB. I build efficient, scalable, and user-friendly applications that solve real-world problems. Let's work together to bring your ideas to life!
            </p>
          </AnimatedItem>
        
        </AnimatedSection>

      <AnimatedSection className="flex flex-col divide-y divide-white/10 border border-white/10 rounded-2xl bg-white/[0.03] backdrop-blur-xl p-6 md:p-8">

  {/* TITLE */}
  <div className="pb-6">
    <h3 className="text-lg font-semibold text-white md:text-xl">
      Get in Touch
    </h3>
    <p className="mt-1 text-sm text-zinc-400">
      Let’s build something amazing together
    </p>
  </div>

  {/* EMAIL */}
  <div className="py-5">
    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
      Email
    </p>
    <a
      href="mailto:yourmail@gmail.com"
      className="mt-2 block text-sm text-white hover:text-accent transition"
    >
      yourmail@gmail.com
    </a>
  </div>

  {/* LOCATION */}
  <div className="py-5">
    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
      Location
    </p>
    <p className="mt-2 text-sm text-white">
      Mumbai, India
    </p>
  </div>

  {/* SOCIAL */}
{/* SOCIAL */}
<div className="py-5 flex flex-col gap-3">
  <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
    Social
  </p>

  <div className="flex items-center gap-4">
    {/* GitHub */}
    <a
      href="https://github.com/"
      target="_blank"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:text-accent hover:border-accent/40 hover:scale-110"
    >
      <GithubLogo size={18} weight="bold" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/"
      target="_blank"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:text-accent hover:border-accent/40 hover:scale-110"
    >
      <LinkedinLogo size={18} weight="bold" />
    </a>

    {/* Twitter */}
    <a
      href="https://twitter.com/"
      target="_blank"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:text-accent hover:border-accent/40 hover:scale-110"
    >
      <TwitterLogo size={18} weight="bold" />
    </a>

    {/* Instagram (optional) */}
    <a
      href="https://instagram.com/"
      target="_blank"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:text-accent hover:border-accent/40 hover:scale-110"
    >
      <InstagramLogo size={18} weight="bold" />
    </a>
  </div>
</div>
  {/* BUTTON */}
  <div className="pt-6">
    <a
      href="mailto:yourmail@gmail.com"
      className="group inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-black transition hover:scale-[1.02]"
    >
      Say Hello
      <ArrowUpRight
        size={16}
        className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  </div>

</AnimatedSection>
      </div>
    </section>
  );
}
