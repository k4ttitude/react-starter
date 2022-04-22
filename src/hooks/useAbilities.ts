import { useMemo } from 'react'
import { Ability, AbilityBuilder } from '@casl/ability'
import { useAuthStore, User, UserRoles } from '../store/authStore'

const defineAbilitiesFor = (user?: User) => {
  const { can, cannot, rules } = new AbilityBuilder(Ability)
  if (!user) {
    return new Ability(rules)
  }

  // everyone
  can('read', 'menu')

  // only admin
  if (user.role === UserRoles.ADMIN) {
    can('read', 'users')
  }

  // cannot delete a post if it was created more than a day ago
  cannot('delete', 'BlogPost', {
    createdAt: { $lt: Date.now() - 24 * 60 * 60 * 1000 },
  })

  return new Ability(rules)
}

export const useAbilities = () => {
  const { user } = useAuthStore()
  const abilities = useMemo(() => defineAbilitiesFor(user), [user])

  return abilities
}
