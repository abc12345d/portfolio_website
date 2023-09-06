const G="data:text/markdown;base64,IyBDcm9zcyBTaXRlIFJlcXVlc3QgRm9yZ2VyeSAoQ1NSRikgd2ViIGF0dGFjayBhbmQgaG93IHRvIHByZXZlbnQgaXQgdXNpbmcgRmxhc2stV1RGCgpDcm9zcy1TaXRlIFJlcXVlc3QgRm9yZ2VyeSAoQ1NSRikgaXMgYW4gYXR0YWNrIGFnYWluc3QgYSB3ZWIgYXBwbGljYXRpb24gaW4gd2hpY2ggdGhlIGF0dGFja2VyIGF0dGVtcHRzIHRvIHRyaWNrIGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBpbnRvIHBlcmZvcm1pbmcgYSBtYWxpY2lvdXMgYWN0aW9uLiBNb3N0IENTUkYgYXR0YWNrcyB0YXJnZXQgd2ViIGFwcGxpY2F0aW9ucyB0aGF0IHVzZSBjb29raWUtYmFzZWQgYXV0aCBzaW5jZSB3ZWIgYnJvd3NlcnMgaW5jbHVkZSBhbGwgb2YgdGhlIGNvb2tpZXMgYXNzb2NpYXRlZCB3aXRoIGEgcGFydGljdWxhciBkb21haW4gd2l0aCBlYWNoIHJlcXVlc3QuIFNvIHdoZW4gYSBtYWxpY2lvdXMgcmVxdWVzdCBpcyBtYWRlIGZyb20gdGhlIHNhbWUgYnJvd3NlciwgdGhlIGF0dGFja2VyIGNhbiBlYXNpbHkgbWFrZSB1c2Ugb2YgdGhlIHN0b3JlZCBjb29raWVzLgoKSGVyZSdzIGhvdyBDU1JGIHdvcmtzOiAKMS4gKipVc2VyIEF1dGhlbnRpY2F0aW9uKio6IFRoZSB2aWN0aW0gdXNlciBsb2dzIGluIHRvIGEgd2ViIGFwcGxpY2F0aW9uLCBzdWNoIGFzIGEgc29jaWFsIG1lZGlhIHNpdGUgb3IgYW4gb25saW5lIGJhbmtpbmcgcGxhdGZvcm0uIFRoZSB1c2VyIHJlY2VpdmVzIGFuIGF1dGhlbnRpY2F0aW9uIHRva2VuLCB1c3VhbGx5IHN0b3JlZCBhcyBhIGJyb3dzZXIgY29va2llLCB3aGljaCBpZGVudGlmaWVzIHRoZW0gYXMgYSBsZWdpdGltYXRlIHVzZXIuCjIuICoqTWFsaWNpb3VzIFJlcXVlc3QqKjogVGhlIGF0dGFja2VyIGNyZWF0ZXMgYSBtYWxpY2lvdXMgd2Vic2l0ZSBvciBkaXNndWlzZXMgYSBsaW5rIG9uIGEgbGVnaXRpbWF0ZSBzaXRlLiBUaGlzIHdlYnNpdGUgb3IgbGluayBjb250YWlucyBhIHJlcXVlc3QgdG8gcGVyZm9ybSBhbiBhY3Rpb24gb24gdGhlIHRhcmdldCB3ZWIgYXBwbGljYXRpb24sIHN1Y2ggYXMgY2hhbmdpbmcgdGhlIHVzZXIncyBwYXNzd29yZCBvciBtYWtpbmcgYSBmaW5hbmNpYWwgdHJhbnNhY3Rpb24uCjMuICoqVXNlciBJbnRlcmFjdGlvbioqOiBUaGUgdmljdGltIHVzZXIgdmlzaXRzIHRoZSBtYWxpY2lvdXMgd2Vic2l0ZSBvciBjbGlja3Mgb24gdGhlIGRpc2d1aXNlZCBsaW5rLCBvZnRlbiB1bmtub3dpbmdseS4gVGhlIHVzZXIncyBicm93c2VyIHNlbmRzIHRoZSBhdXRoZW50aWNhdGVkIHNlc3Npb24gY29va2llIGFsb25nIHdpdGggdGhlIG1hbGljaW91cyByZXF1ZXN0Lgo0LiAqKkZvcmdlcnkqKjogU2luY2UgdGhlIHVzZXIncyBicm93c2VyIGF1dG9tYXRpY2FsbHkgaW5jbHVkZXMgdGhlIGF1dGhlbnRpY2F0aW9uIHRva2VuIChjb29raWUpIHdpdGggdGhlIHJlcXVlc3QsIHRoZSB3ZWIgYXBwbGljYXRpb24gaW50ZXJwcmV0cyB0aGUgcmVxdWVzdCBhcyBsZWdpdGltYXRlLCBhc3N1bWluZyBpdCBjb21lcyBmcm9tIHRoZSBhdXRoZW50aWNhdGVkIHVzZXIuCjUuICoqVW5hdXRob3JpemVkIEFjdGlvbioqOiBUaGUgYXR0YWNrZXIncyByZXF1ZXN0IGlzIGV4ZWN1dGVkIG9uIHRoZSB0YXJnZXQgYXBwbGljYXRpb24gd2l0aG91dCB0aGUgdXNlcidzIGNvbnNlbnQuIFRoaXMgY291bGQgbGVhZCB0byBhY3Rpb25zIGxpa2UgdW5hdXRob3JpemVkIG1vbmV5IHRyYW5zZmVycywgY2hhbmdlcyB0byBhY2NvdW50IHNldHRpbmdzLCBvciBwb3N0aW5nIG9uIGJlaGFsZiBvZiB0aGUgdXNlciB3aXRob3V0IHRoZWlyIGtub3dsZWRnZS4KCkhvdyBGbGFzay1XVEYgZXh0ZW5zaW9uIHRhY2tsZXMgQ1NSRiBhdHRhY2tzOgoxLiAqKkNTUkYgVG9rZW4gR2VuZXJhdGlvbioqOiBGbGFzay1XVEYgZ2VuZXJhdGVzIGEgcmFuZG9tIENTUkYgdG9rZW4gZm9yIGVhY2ggZm9ybSB0aGF0IHlvdSBjcmVhdGUgdXNpbmcgdGhlIGV4dGVuc2lvbi4gVGhpcyB0b2tlbiBpcyB1bmlxdWUgdG8gdGhlIHVzZXIncyBzZXNzaW9uLgoyLiAqKlRva2VuIEluc2VydGlvbiBpbiBGb3JtcyoqOiBXaGVuIHlvdSByZW5kZXIgYSBmb3JtIGluIHlvdXIgSFRNTCB0ZW1wbGF0ZSB1c2luZyBGbGFzay1XVEYsIGl0IGluc2VydHMgdGhlIENTUkYgdG9rZW4gYXMgYSBoaWRkZW4gZmllbGQgaW4gdGhlIGZvcm0uIEZvciBleGFtcGxlLCBpbiB5b3VyIHRlbXBsYXRlLCB5b3UgbWlnaHQgaGF2ZSBzb21ldGhpbmcgbGlrZToKCiAgICBgYGBIVE1MCiAgICA8Zm9ybSBhY3Rpb249Ii9hY2NvdW50cyIgbWV0aG9kPSJQT1NUIiBhdXRvY29tcGxldGU9Im9mZiI+CiAgICAgICAgPHA+VHJhbnNmZXIgTW9uZXk8L3A+CiAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIG5hbWU9ImFjY291bnQiIHBsYWNlaG9sZGVyPSJhY2NvdW50aWQiPgogICAgICAgIDxpbnB1dCB0eXBlPSJudW1iZXIiIG5hbWU9ImFtb3VudCIgcGxhY2Vob2xkZXI9ImFtb3VudCI+CiAgICAgICAgPGlucHV0IHR5cGU9InN1Ym1pdCIgdmFsdWU9InNlbmQiPgogICAgICAgIDxpbnB1dCB0eXBlPSJoaWRkZW4iIG5hbWU9ImNzcmZfdG9rZW4iIHZhbHVlPSJ7eyBjc3JmX3Rva2VuKCkgfX0iPgogICAgPC9mb3JtPgogICAgYGBgCgozLiAqKlRva2VuIFZhbGlkYXRpb24gb24gU3VibWlzc2lvbioqOiBXaGVuIHRoZSB1c2VyIHN1Ym1pdHMgdGhlIGZvcm0sIEZsYXNrLVdURiBhdXRvbWF0aWNhbGx5IHZhbGlkYXRlcyB0aGUgQ1NSRiB0b2tlbiBpbmNsdWRlZCBpbiB0aGUgZm9ybSBkYXRhLiBJdCBjaGVja3Mgd2hldGhlciB0aGUgdG9rZW4gbWF0Y2hlcyB0aGUgb25lIGFzc29jaWF0ZWQgd2l0aCB0aGUgdXNlcidzIHNlc3Npb24uIElmIHRoZSB0b2tlbnMgZG8gbm90IG1hdGNoLCB0aGUgc3VibWlzc2lvbiBpcyByZWplY3RlZC4KCgojIFJlZmVyZW5jZQpbYW4gZXhhbXBsZSBvZiBhIEZsYXNrIGFwcCB0aGF0J3MgdnVsbmVyYWJsZSB0byBDU1JGIGF0dGFja3MgYW5kIGhvdyB0byBpbXBsZW1lbnQgQ1NSRiBwcm90ZWN0aW9uXShodHRwczovL3Rlc3Rkcml2ZW4uaW8vYmxvZy9jc3JmLWZsYXNrLyk=";export{G as default};
