"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { icon: Users, value: "12,000+", label: "Active Students" },
  { icon: BookOpen, value: "200+", label: "Courses" },
  { icon: Star, value: "4.9", label: "Avg. Rating" },
];

export default function HeroSection() {
  return (
    <section
      aria-label="Welcome to Praxis Learn"
      className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-36"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge
              variant="secondary"
              className="mb-4 gap-1.5 px-3 py-1 text-xs font-medium"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              New courses added every week
            </Badge>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Learn skills that{" "}
              <span className="text-gradient-amber">open doors</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg">
              Subscribe once, access everything. Expert-led video courses you can watch anytime — stream on any device, earn certificates, and level up at your own pace.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="font-semibold group">
                <Link href="/courses">
                  Browse courses
                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/pricing">
                  <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                  Watch free preview
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-none">
                      {value}
                    </p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Course card preview */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card border border-border hover-lift">
              {/* Mock video thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 shadow-lg hover:bg-primary transition-colors cursor-pointer group">
                  <Play
                    className="h-6 w-6 fill-primary-foreground text-primary-foreground ml-0.5 transition-transform group-hover:scale-110"
                    aria-hidden="true"
                  />
                </div>
                {/* DRM overlay — prevents save as */}
                <div
                  className="absolute inset-0 no-select"
                  onContextMenu={(e) => e.preventDefault()}
                  aria-hidden="true"
                />
              </div>

              {/* Course info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Badge variant="secondary" className="mb-2 text-xs">
                      Business Finance
                    </Badge>
                    <h3 className="font-semibold text-foreground leading-snug">
                      Financial Modelling for Professionals
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      by Kwame Mensah · 24 lessons · 6h 30m
                    </p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star
                      className="h-4 w-4 fill-primary text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold">4.9</span>
                  </div>
                </div>

                {/* Progress bar (logged-in state preview) */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>Your progress</span>
                    <span>68%</span>
                  </div>
                  <div
                    className="h-1.5 w-full rounded-full bg-muted overflow-hidden"
                    role="progressbar"
                    aria-valuenow={68}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Course progress: 68%"
                  >
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-700"
                      style={{ width: "68%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 rounded-xl glass p-3 shadow-lg">
              <p className="text-xs font-medium text-foreground">
                🏆 Certificate earned!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
