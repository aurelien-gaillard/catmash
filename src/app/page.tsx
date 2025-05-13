import BottomNavigation from '@/components/BottomNavigation/BottomNavigation'
import PageLayout from '@/components/PageLayout/PageLayout'
import { routes } from '@/utils/routes'
import VotingSection from './VotingSection'

export default function Homepage() {
  return (
    <PageLayout>
      <VotingSection />
      <BottomNavigation
        href={routes['/rankings']}
        label='Voir le classement des chats'
      />
    </PageLayout>
  )
}
