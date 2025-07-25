import gsap from "gsap";

export function applyMagneticEffect(elements, strength = 0.3) {

  const elList = Array.from(elements instanceof NodeList ? elements : Array.isArray(elements) ? elements : [elements]);

  const cleanups = elList.map((element) => {
    if (!(element instanceof HTMLElement)) return () => {};

    const handleMouseMove = (e) => {
      const bounds = element.getBoundingClientRect();
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        ease: "power3.out",
        duration: 0.4,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        ease: "power3.out",
        duration: 0.4,
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}
