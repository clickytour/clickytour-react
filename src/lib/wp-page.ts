export type WpPageData = {
  title: string;
  content: string;
};

export async function fetchWpPageBySlug(slug: string): Promise<WpPageData> {
  try {
    const response = await fetch(`https://clickytour.com/wp-json/wp/v2/pages?slug=${slug}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return { title: '', content: '' };
    }

    const data = await response.json();
    return {
      title: data?.[0]?.title?.rendered || '',
      content: data?.[0]?.content?.rendered || '',
    };
  } catch {
    return { title: '', content: '' };
  }
}

export function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').trim();
}

export function ownersPlaceholderHtml(title: string): string {
  return `
    <p>${title} content is being prepared and will be available shortly.</p>
    <p>In the meantime, you can contact the ClickyTour team to receive guidance tailored to your property goals.</p>
    <ul>
      <li>Get practical next steps for listing or promoting your property</li>
      <li>Understand available owner support options and services</li>
      <li>Receive recommendations based on your rental or real-estate strategy</li>
    </ul>
  `;
}
