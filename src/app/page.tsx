"use client";

import React, { FC, useEffect, useState } from "react";

import Modal from "@/components/Modal";
import { Button } from "@/components/Button";
import { Container } from ".";
import { useRouter, useSearchParams } from "next/navigation";
import { modalType } from "@/components/Modal/type";

const Test: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<modalType>();
  const router = useRouter();
  const searchParams = useSearchParams();
  function onclose() {
    router.push("/");
    setShow(false);
  }
  const modalToggle = () => {
    router.push("/?show=true");
    setShow((prev) => !prev);
  };

  useEffect(() => {
    const show = searchParams.get("show");
    setShow(!!show);
    console.log(show);
  }, [searchParams]);
  return (
    <Container>
      <div className="flex justify-center items-center gap-3 ">
        <Button onClick={modalToggle}>show modal </Button>
        <select onChange={(e) => setSelectOption(e.target.value as modalType)}>
          <option value="top">top</option>
          <option value="left">left</option>
          <option value="right">right</option>
          <option value="bottom">bottom</option>
        </select>
      </div>

      <Modal
        open={show}
        onclose={onclose}
        width={500}
        type={selectOption as modalType}
      >
       <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900">Modal Title</h3>
        <div className="mt-2 px-7 py-3">
          <p className="text-lg text-gray-500">Modal Body</p>
        </div>
      </div>
      </Modal>
    </Container>
  );
};

export default Test;
