# JejuBucketList App Support

정적 지원 사이트입니다.

포함 페이지:

- `index.html`: 운영 중인 36개 앱 검색·지원 디렉터리
- `apps/{slug}/index.html`: 앱별 검색·지원 페이지
- `apps/rss.xml`: 전체 운영 앱 RSS
- `sitemap.xml`: 검색 대상 37개 URL
- `privacy.html`: 개인정보 처리방침
- `data-deletion.html`: 데이터 삭제 요청 안내
- `scripts/indexnow-submit.mjs`: sitemap URL IndexNow 제출

배포 대상:

- GitHub Pages
- Netlify

IndexNow 키 파일이 공개된 다음 아래 명령으로 변경 URL을 제출합니다.

```bash
node scripts/indexnow-submit.mjs
```
