"use client";

import ProductImage from "@/components/ProductImage";
import { Dialog } from "@headlessui/react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Modal() {
  let [isOpen, setIsOpen] = useState(true);
  const id = useParams().id;
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product: Product = await res.json();
      setProduct(product)
    }
    fetchProduct()
  }, [id]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10">
            <div className="flex gap-x-8 h-96">
                {product?.image && (
                    <div className="relative w-72 h-full hidden md:inline">
                        <ProductImage product={product} fill />
                    </div>
                )}
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
