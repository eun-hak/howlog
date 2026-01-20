import React from 'react';
import Link from 'next/link';
import { ChevronRight, Target, Users, BookOpen, Shield } from 'lucide-react';

export const metadata = {
  title: '사이트 소개 | 하우로그',
  description: '하우로그(HowLog)는 다양한 분야의 방법을 기록하고 공유하는 지식 아카이브입니다. 우리의 미션과 콘텐츠 작성 원칙을 알아보세요.',
  openGraph: {
    title: '사이트 소개 | 하우로그',
    description: '방법을 기록한 아카이브 - 실용적인 How-to 가이드',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-indigo-600 cursor-pointer">홈</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="font-medium text-gray-900">사이트 소개</span>
        </div>
      </div>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">HowLog 소개</h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          방법을 기록하고 공유하는 지식 아카이브, 실용적인 노하우를 모두에게.
        </p>

        {/* Mission Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Target className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 m-0">우리의 미션</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            HowLog(하우로그)는 "How(방법)"와 "Log(기록)"의 합성어로, 다양한 분야의 실용적인 방법과 노하우를 
            체계적으로 기록하고 공유하는 지식 아카이브입니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            우리는 기술, 생활, 창작, 취미 등 다양한 주제에 걸친 How-to 가이드와 튜토리얼을 통해 
            모든 사람이 새로운 것을 배우고 성장할 수 있도록 돕습니다.
          </p>
        </section>

        {/* What We Provide */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 m-0">제공하는 콘텐츠</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">기술 가이드</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                프로그래밍, 도구 활용, 웹 개발 등 기술 관련 실용적인 가이드를 제공합니다. 
                초보자부터 중급자까지 단계별로 따라할 수 있는 튜토리얼을 작성합니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">생활 노하우</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                일상생활에서 유용한 팁과 방법을 공유합니다. 문제 해결, 효율적인 방법, 
                생활의 지혜 등 실생활에 도움이 되는 정보를 제공합니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="text-xl font-bold text-amber-900 mb-3">창작 튜토리얼</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                디자인, 글쓰기, 영상 제작 등 창작 활동에 필요한 기술과 방법을 
                단계별로 상세히 설명합니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-lg border border-pink-100">
              <h3 className="text-xl font-bold text-rose-900 mb-3">취미 & 라이프</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                취미 생활, 운동, 요리 등 삶을 더 풍요롭게 만드는 다양한 주제의 
                실용적인 가이드를 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Content Principles */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 m-0">콘텐츠 작성 원칙</h2>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-indigo-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">1. 실용성과 정확성</h3>
              <p className="text-gray-700 leading-relaxed">
                모든 가이드는 실제로 검증된 방법만을 담습니다. 직접 테스트하고 확인한 내용만을 
                제공하며, 실용적으로 활용할 수 있는 정보를 우선시합니다.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">2. 명확한 설명</h3>
              <p className="text-gray-700 leading-relaxed">
                복잡한 내용도 누구나 이해할 수 있도록 쉽게 풀어 설명합니다. 
                단계별 구성과 시각 자료를 활용하여 따라하기 쉽게 만듭니다.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">3. 독창적인 콘텐츠</h3>
              <p className="text-gray-700 leading-relaxed">
                다른 곳에서 찾을 수 없는 독자적인 경험과 노하우를 공유합니다. 
                모든 콘텐츠는 우리가 직접 작성하며, 독창적인 관점을 담아냅니다.
              </p>
            </div>

            <div className="border-l-4 border-amber-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">4. 지속적인 업데이트</h3>
              <p className="text-gray-700 leading-relaxed">
                기술과 트렌드는 계속 변화합니다. 콘텐츠를 정기적으로 검토하고 
                최신 정보로 업데이트하여 항상 유효한 정보를 제공합니다.
              </p>
            </div>

            <div className="border-l-4 border-rose-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">5. 사용자 중심</h3>
              <p className="text-gray-700 leading-relaxed">
                독자가 실제로 필요로 하는 정보를 제공하는 데 집중합니다. 
                피드백을 소중히 여기며, 사용자의 요청을 반영한 콘텐츠를 만듭니다.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 m-0">팀 소개</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            HowLog는 다양한 분야의 전문가와 실무자들이 모여 운영하는 지식 공유 플랫폼입니다. 
            개발자, 디자이너, 크리에이터, 전문가들이 각자의 경험과 노하우를 나누며, 
            모두가 배우고 성장할 수 있는 환경을 만들어가고 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            우리는 단순히 이론을 나열하는 것이 아니라, 실제 경험에서 얻은 실용적인 지식을 공유합니다. 
            각 분야의 전문가가 콘텐츠를 작성하고, 크로스 체크 시스템을 통해 품질을 보장합니다.
          </p>
        </section>

        {/* Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">핵심 가치</h2>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <strong className="text-gray-900">방법의 기록</strong>
                  <p className="text-gray-700 mt-1">실용적인 방법과 노하우를 체계적으로 기록하고 보존합니다.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <strong className="text-gray-900">지식의 공유</strong>
                  <p className="text-gray-700 mt-1">배운 것을 나누고, 함께 성장하는 커뮤니티를 만들어갑니다.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <strong className="text-gray-900">실용성 추구</strong>
                  <p className="text-gray-700 mt-1">이론보다는 실제로 활용할 수 있는 실용적인 정보를 제공합니다.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <strong className="text-gray-900">품질과 신뢰</strong>
                  <p className="text-gray-700 mt-1">검증된 정보만을 제공하며, 정확성과 품질을 최우선으로 합니다.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-3">함께 지식을 나누고 싶으신가요?</h2>
            <p className="mb-6 text-indigo-100">
              콘텐츠에 대한 의견, 제안, 협업 문의 등 언제든 환영합니다. 
              더 많은 사람들과 유용한 정보를 공유하고 싶은 분들의 연락을 기다립니다.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors no-underline"
            >
              문의하기 →
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-sm text-gray-500 border-t pt-8">
          <p className="mb-2">
            <strong>면책사항:</strong> 본 사이트의 콘텐츠는 정보 제공 목적으로만 작성되었습니다. 
            가이드나 방법은 작성자의 경험을 바탕으로 하며, 모든 상황에 적용되지 않을 수 있습니다.
          </p>
          <p>
            기술이나 도구는 업데이트에 따라 변경될 수 있으며, 정보의 정확성을 위해 최선을 다하고 있으나 
            일부 내용이 최신 버전과 다를 수 있습니다. 오류를 발견하신 경우 <Link href="/contact" className="text-indigo-600 underline">문의하기</Link>를 통해 알려주시면 감사하겠습니다.
          </p>
        </section>
      </article>
    </div>
  );
}
