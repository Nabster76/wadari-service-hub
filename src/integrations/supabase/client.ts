
import { createClient } from '@supabase/supabase-js'
import { config } from '@/lib/config'

const supabaseUrl = config.supabase.url
const supabaseKey = config.supabase.anonKey

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
})
