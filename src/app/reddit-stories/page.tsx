import GenerateRedditStoryForm from "@/components/forms/generate-reddit-story-form";

function Page() {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full max-w-xl m-auto border p-4 rounded-3xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Create Reddit Story Short{" "}
        </h1>
        <GenerateRedditStoryForm />
      </div>
    </div>
  );
}

export default Page;
