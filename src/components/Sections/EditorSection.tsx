'use client';

import UnifiedEditor from '@/components/PhotoEditor/UnifiedEditor';

export default function EditorSection() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="editor-container">
          <UnifiedEditor />
        </div>
      </div>
    </section>
  );
}