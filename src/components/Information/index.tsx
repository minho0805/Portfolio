import ContactItem from "../ContactItem";
import Introduce from "./Introduce";
import Image from "next/image"; // Next.js 이미지 컴포넌트 추가

import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      {/* 상단 섹션을 좌우로 나누기 위해 flex md:flex-row 추가 */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* 왼쪽: 텍스트 영역 */}
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="leading-[1.15] text-left">
            안녕하세요,
            <br /> 백엔드 개발자{" "}
            <span className="text-PRIMARY font-semibold">{information.name}</span>
            입니다.
          </h1>
          <div className="flex gap-1">
            {information.contact.map((contact) => (
              <ContactItem
                key={contact.id}
                className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
                {...contact}
              >
                {contact.name}
              </ContactItem>
            ))}
          </div>
        </div>

        {/* 오른쪽: 이미지 영역 */}
        <div className="flex-shrink-0">
          <div className="relative w-40 h-40 md:w-52 md:h-52 overflow-hidden rounded-none border-4 border-PRIMARY">
            <Image
              src={information.imgSrc || "/profile.png"} // data.json에 이미지 경로가 없다면 public/profile.png 사용
              alt={information.name}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>

      </div>

      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;