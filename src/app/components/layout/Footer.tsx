import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-lg mb-4 text-gray-900">하우로그(HowLog)</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-4">
              How + Log. 다양한 분야의 방법(How)을 기록(Log)하는 지식 아카이브입니다.
              실용적인 가이드와 노하우를 공유합니다.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed max-w-md">
              본 사이트는 다양한 주제의 How-to 가이드와 실용 정보를 제공하는 목적으로 운영됩니다. 
              모든 콘텐츠는 정보 제공 목적으로만 작성되었습니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">사이트</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-indigo-600">홈</Link></li>
              <li><Link href="/about" className="hover:text-indigo-600">사이트 소개</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-600">문의하기</Link></li>
              <li><Link href="/category/content" className="hover:text-indigo-600">카테고리</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">법적 고지</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/privacy-policy" className="hover:text-indigo-600">개인정보처리방침</Link></li>
              <li><Link href="/terms" className="hover:text-indigo-600">서비스 이용약관</Link></li>
              <li><Link href="/cookies" className="hover:text-indigo-600">쿠키 정책</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2025 하우로그.  All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  );
}
