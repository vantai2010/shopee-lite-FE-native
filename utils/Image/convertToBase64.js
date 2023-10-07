export const convertToBase64 = async (uri) => {
    const base64 = await FileSystem.readAsStringAsync(result.uri, {
        encoding: FileSystem.EncodingType.Base64,
    });
    return base64
}