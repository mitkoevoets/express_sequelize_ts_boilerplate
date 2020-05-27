export default (filename: string, member: string) => {
  return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
}
