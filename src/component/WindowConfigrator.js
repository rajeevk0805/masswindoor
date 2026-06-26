"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Save, RotateCcw, Phone, Loader2 } from "lucide-react";

import WindowTypeSelector from "./window-type-selector";
import DimensionsSelector from "./dimension-selector";
import MaterialSelector from "./material-selector";
import GlassTypeSelector from "./glasstype-selector";
import ColorSelector from "./color-selector";
import HardwareSelector from "./hardware-selector";
import { toast } from "react-toastify";
import BookingModal from "./Booking-modal";

export default function WindowCustomizer({ editId }) {
  const [selectedType, setSelectedType] = useState("slider");
  const [selectedDimensions, setSelectedDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [selectedMaterial, setSelectedMaterial] = useState("upvc");
  const [selectedGlassType, setSelectedGlassType] = useState("clear");
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedHardware, setSelectedHardware] = useState("Crescent-Handle");
  const [finishType, setFinishType] = useState("mattle");
  const [resetting, setResetting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  // Track which sections have been interacted with
  const [sectionsCompleted, setSectionsCompleted] = useState({
    windowType: true,
    dimensions: false,
    material: false,
    glassType: false,
    color: false,
    hardware: false,
  });
  const router = useRouter();

  // Derive progress from sectionsCompleted — no effect needed
  const progress = useMemo(() => {
    const completedCount =
      Object.values(sectionsCompleted).filter(Boolean).length;
    const totalSections = Object.keys(sectionsCompleted).length;
    return Math.floor(
      10 + (completedCount / totalSections) * 90
    );
  }, [sectionsCompleted]);

  // Load existing booking data when in edit mode
  useEffect(() => {
    if (editId) {
      const fetchBooking = async () => {
        try {
          const token = localStorage.getItem("authToken");
          const response = await fetch(`/api/booking?id=${editId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          if (data.success && data.booking) {
            const booking = data.booking;
            setSelectedType(booking.type || "slider");
            setSelectedDimensions(booking.dimensions || { width: 0, height: 0 });
            setSelectedMaterial(booking.material || "upvc");
            setSelectedGlassType(booking.glassType || "clear");
            setSelectedColor(booking.color || "white");
            setSelectedHardware(booking.hardware || "Crescent-Handle");
            setFinishType(booking.finish || "mattle");
            setSectionsCompleted({
              windowType: true,
              dimensions: true,
              material: true,
              glassType: true,
              color: true,
              hardware: true,
            });
          }
        } catch (error) {
          console.error("Failed to load booking:", error);
        }
      };
      fetchBooking();
    }
  }, [editId]);

  useEffect(() => {
    const payload = {
      type: selectedType,
      dimensions: selectedDimensions,
      material: selectedMaterial,
      glassType: selectedGlassType,
      color: selectedColor,
      hardware: selectedHardware,
      finish: finishType,
    };

    console.log("Payload:", payload);
  }, [
    selectedType,
    selectedDimensions,
    selectedMaterial,
    selectedGlassType,
    selectedColor,
    selectedHardware,
    finishType,
  ]);

  const bookingData = {
    type: selectedType,
    dimensions: selectedDimensions,
    material: selectedMaterial,
    glassType: selectedGlassType,
    color: selectedColor,
    hardware: selectedHardware,
    finish: finishType,
  };

  const handleSave = async () => {
    if (!editId) return;
    setSaving(true);
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(`/api/booking?id=${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Booking updated successfully!");
        router.push("/admin/bookings");
      } else {
        toast.error(data.message || "Failed to update booking");
      }
    } catch (error) {
      toast.error("Something went wrong while saving");
      console.error("Save error:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleBooking = () => {
    if (progress !== 100) {
      return;
    }
 
    setIsModalOpen(true);
  };

  const handleReset = () => {
    setResetting(true);
    setSectionsCompleted({
      windowType: false,
      dimensions: false,
      material: false,
      glassType: false,
      color: false,
      hardware: false,
    });
    setTimeout(() => {
      setSelectedType("slider");
      setSelectedDimensions({ width: 635, height: 890 });
      setSelectedMaterial("upvc");
      setSelectedGlassType("clear");
      setSelectedColor("white");
      setSelectedHardware("Crescent-Handle");
      setFinishType("mattle");
      setSectionsCompleted({
        windowType: true,
        dimensions: false,
        material: false,
        glassType: false,
        color: false,
        hardware: false,
      });
      setResetting(false);
    }, 500);
  };

  // Update section completion status
  const markSectionCompleted = (section) => {
    setSectionsCompleted((prev) => ({
      ...prev,
      [section]: true,
    }));
  };

  return (
    <section className="py-24">
      <div className="container p-6 bg-white">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Smart Window & Door Customizer</h1>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-green-700 font-medium">Customising...</p>
            <span className="text-sm text-gray-500">{progress}% Complete</span>
          </div>
          <Progress
            value={progress}
            className="h-2 bg-gray-100"
            indicatorClassName="bg-green-700"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side - Window Preview */}
          <div className="flex items-center flex-col justify-center relative ">
            <div className="bg-[#EBEBEB]  rounded-lg p-6">
              <Image
                src={`/assets/${selectedType}.svg`}
                alt="Window Preview"
                width={400}
                height={300}
                className="w-full"
              />
            </div>

            <div className="gap-6 mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
              <Card className="p-3 flex items-center flex-row  gap-2 text-xs">
                <div className="bg-green-100 p-1 rounded-full">
                  <Badge className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center p-0">
                    <span className="text-xs">✓</span>
                  </Badge>
                </div>
                <div>
                  <p className="font-semibold text-[12px]">10-Year Warranty</p>
                  <p className="text-gray-500">Full Coverage</p>
                </div>
              </Card>

              <Card className="p-3 flex items-center flex-row  gap-2 text-xs">
                <div className="bg-green-100 flex p-1 rounded-full">
                  <Badge className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center p-0">
                    <span className="text-xs">✓</span>
                  </Badge>
                </div>
                <div>
                  <p className="font-semibold text-[12px]">Free Delivery</p>
                  <p className="text-gray-500">Within 14 Days</p>
                </div>
              </Card>

              <Card className="p-3 flex items-center gap-2 flex-row  text-xs">
                <div className="bg-green-100 p-1 rounded-full">
                  <Badge className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center p-0">
                    <span className="text-xs">✓</span>
                  </Badge>
                </div>
                <div>
                  <p className="font-semibold text-[12px]">Energy Efficient</p>
                  <p className="text-gray-500">A+ Rated</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Right side - Customization Options */}
          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Customize your Window</h2>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="window-type"
            >
              <AccordionItem value="window-type">
                <AccordionTrigger>Window Type</AccordionTrigger>
                <AccordionContent>
                  <WindowTypeSelector
                    selectedType={selectedType}
                    onSelect={(type) => {
                      setSelectedType(type);
                      markSectionCompleted("windowType");
                    }}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dimensions">
                <AccordionTrigger>Dimensions</AccordionTrigger>
                <AccordionContent>
                  <DimensionsSelector
                    dimensions={selectedDimensions}
                    onChange={(dimensions) => {
                      setSelectedDimensions(dimensions);
                      markSectionCompleted("dimensions");
                    }}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="material">
                <AccordionTrigger>Material</AccordionTrigger>
                <AccordionContent>
                  <MaterialSelector
                    selectedMaterial={selectedMaterial}
                    onSelect={(material) => {
                      setSelectedMaterial(material);
                      markSectionCompleted("material");
                    }}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="glass-type">
                <AccordionTrigger>Glass Type</AccordionTrigger>
                <AccordionContent>
                  <GlassTypeSelector
                    selectedGlassType={selectedGlassType}
                    onSelect={(glassType) => {
                      setSelectedGlassType(glassType);
                      markSectionCompleted("glassType");
                    }}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="color">
                <AccordionTrigger>Color</AccordionTrigger>
                <AccordionContent>
                  <ColorSelector
                    setFinishType={setFinishType}
                    finishType={finishType}
                    selectedColor={selectedColor}
                    onSelect={(color) => {
                      setSelectedColor(color);
                      markSectionCompleted("color");
                    }}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hardware">
                <AccordionTrigger>Hardware</AccordionTrigger>
                <AccordionContent>
                  <HardwareSelector
                    selectedHardware={selectedHardware}
                    onSelect={(hardware) => {
                      setSelectedHardware(hardware);
                      markSectionCompleted("hardware");
                    }}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-6 flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                disabled={resetting}
              >
                {resetting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <RotateCcw className="mr-2 h-4 w-4" />
                )}
                Reset
              </Button>
              {editId ? (
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleSave}
                  disabled={progress !== 100 || saving}
                >
                  {saving ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin h-4 w-4 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      Saving...
                    </span>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  className="bg-green-800 hover:bg-green-900"
                  onClick={handleBooking}
                  disabled={progress !== 100 || loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin h-4 w-4 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <>
                      <Phone className="mr-2 h-4 w-4" />
                      Book Free Consultation
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookingData={bookingData}
      />
    </section>
  );
}