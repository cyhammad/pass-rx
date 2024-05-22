import FlashFacts from '@/app/admin/flash-facts/_components/FlashFacts'
import React from 'react'
import QuizBank from './_components/QuizBank'
import { fetchQuizBanksAdmin } from '@/app/lib/data';

export default async function QuizBankPage() {
  const quizzes = await fetchQuizBanksAdmin();
  return (
    <QuizBank/>
  )
}
