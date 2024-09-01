import React, { useEffect, useRef } from "react";
import inject from "posting/injector"; // 외부 모듈을 가져옵니다.
import { useLocation,useNavigate } from "react-router-dom"; // 현재 URL 경로를 가져오는 훅
import { appPostingBasename } from "../constants/prefix"; // 앱 포스팅의 기본 경로
import { useShellEvent } from "@real-estate/shell-router"; // 이벤트 핸들러를 등록하는 훅

export default function AppPosting() {
  // DOM 요소를 참조하기 위한 ref 생성
  const wrapperRef = useRef<HTMLDivElement>(null);


  // "app-posting" 이벤트를 처리하는 이벤트 핸들러 등록
  useShellEvent("app-posting", appPostingBasename);

  // 첫 번째 렌더링 여부를 확인하기 위한 ref
  const isFirstRunRef = useRef(true);

  // 컴포넌트 언마운트 시 호출될 함수 참조를 저장하는 ref
  const unmountRef = useRef(() => {});

  // 컴포넌트가 처음 렌더링될 때만 실행되는 사이드 이펙트
  useEffect(() => {
    // 첫 번째 렌더링이 아닌 경우, 함수 실행을 중지
    if (!isFirstRunRef.current) {
      return;
    }

    // inject 함수 호출 및 결과를 unmountRef에 저장
    unmountRef.current = inject({
      routerType: "memory", // 라우터 유형 설정
      rootElement: wrapperRef.current!, // DOM 요소 참조 전달
      basePath: location.pathname.replace(appPostingBasename, ""), // 경로에서 기본 경로를 제거
    });

    // 첫 번째 렌더링이 완료되었음을 표시
    isFirstRunRef.current = false;
  }, [location]); // location이 변경될 때마다 실행

  // 컴포넌트 언마운트 시 호출될 함수 설정
  useEffect(() => unmountRef.current, []);

  // 컴포넌트 렌더링
  return <div ref={wrapperRef} id="app-posting" />;
}
