import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iayqaaqbntiawqvainxj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlheXFhYXFibnRpYXdxdmFpbnhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NDYxNDQsImV4cCI6MjA1NDQyMjE0NH0.LkChAxlzdioYXsPWv5OSSsiaM7aFXnN6N05UpIB0Ybk'

export const supabase = createClient(supabaseUrl, supabaseKey)
