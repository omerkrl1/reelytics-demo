import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oqrmplrbdcedjtyypegz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xcm1wbHJiZGNlZGp0eXlwZWd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNjY3MzMsImV4cCI6MjA2OTc0MjczM30.UURwUeaE1YL1zoypfBnZTghp9KW5aDukVnGXnlLCISY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
