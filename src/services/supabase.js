import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mihtqgtvfsswyxkmvnyn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1paHRxZ3R2ZnNzd3l4a212bnluIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTgzMDUwMiwiZXhwIjoyMDY1NDA2NTAyfQ.YJumqQZorJM9LCulVwd29vf4oXrjKCFx7SmXIsEek-Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
