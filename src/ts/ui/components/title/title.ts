export default function titleComponent({ hType, content, level }: any) {
  return `
        <${hType}  class="title is-${level}"> ${content} </${hType}>
    
        
        `;
}
